let container_dash = document.querySelector(".main-table");
let return_home = document.querySelector(".return-home");
let choice_usager = document.querySelector(".choice-usager");
let choice_type = document.querySelector(".choice-type");
let choice_container = document.querySelector(".click-choice");
let choice_containerdiv = document.querySelector(".choice-container");
let container_choice_different_data = document.querySelector(".container-choice-different-data");

let confirmer_choix_button = document.querySelector("#confirmer-choix-board");
let value_trier = document.querySelector(".value-trier");
let stats_cercle = document.querySelector(".stats-cercle");



window.addEventListener("load", () => {
    value_trier.innerHTML = "Date";
    stateTrier();
    stateDashboard();
    // reinitialiser le localstorage
    localStorage.removeItem("ennemi__choisi");
    return_home.addEventListener("click", retournerMenu);
    
    confirmer_choix_button.addEventListener("click", () => stateDashboard());
});

function stateTrier(){
    fetch("AjaxDashboard.php", {   
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        const ennemis_nom = data.ennemis;
        // afficher les usagers dans le trier par usager
        afficherLesUsagers(ennemis_nom);

    });
}

function stateDashboard() {
    container_dash.innerHTML = "";

    let form = new FormData();
   
    let usager = localStorage.getItem("ennemi__choisi");
    form.append("usager", usager);
    fetch("AjaxDashboard.php", {   
        method: "POST",
        body: form    
    })
    .then(response => response.json())
    .then(data => {
        const parties = data.parties;
        const joueur_nom = data.username;
        const totalpartie = data.totalpartie;
        const totalpartieUserConnected = data.totalpartieGagner;
     


        localStorage.setItem("totalpartie", totalpartie[0].count);
        localStorage.setItem("totalpartieUserConnected", totalpartieUserConnected[0].count);



        // si data vide
        if(joueur_nom.length > 0) {
            joueur_nom.forEach(element => {     
                createDivForDesktop(element);
            });
        } else if (parties.length > 0) {
            parties.forEach(element => {
                createDivForDesktop(element);
            });
        } else {
            container_dash.innerHTML = "Aucune partie n'a été jouée";
        }
        
    });
}



function createDivForDesktop(element){
    let div_stats = document.createElement("div");
    div_stats.className = "item-stats";
    

    let joueur = document.createElement("div");
    joueur.className = "vous-items";
    let textjoueur = document.createElement("div");
    textjoueur.className = "text-joueur";


    let ennemi = document.createElement("div");
    ennemi.className = "ennemi-items";
    let textennemi = document.createElement("div");


    let date = document.createElement("div");
    date.className = "date-items";
    let textdate = document.createElement("div");


    let gagnant = document.createElement("div");
    gagnant.className = "gagnant-items";
    let textgagnant = document.createElement("div");

    div_stats.appendChild(joueur);
    div_stats.appendChild(ennemi);
    div_stats.appendChild(date);
    div_stats.appendChild(gagnant);

    joueur.appendChild(textjoueur);
    ennemi.appendChild(textennemi);
    date.appendChild(textdate);
    gagnant.appendChild(textgagnant);


    textjoueur.innerHTML = element.joueur__nom;
    textennemi.innerHTML = element.ennemi__nom;
    textdate.innerHTML = element.date_partie;
    textgagnant.innerHTML = element.gagnant;
    

    if (element.gagnant === element.joueur__nom) {
        textjoueur.classList.add("gagnant");
        textjoueur.classList.remove("perdant");
  
      
    } else {
        textjoueur.classList.add("perdant");
        textjoueur.classList.remove("gagnant");
      
    }
  
    container_dash.appendChild(div_stats);
}
const afficherLesUsagers = (usagers) => {
    let liType = ["Date"];


    const ajouterUsagers = (elements, container) => {
        elements.forEach(element => {
            let liUsager = document.createElement("li");
            let checkboxUsager = document.createElement("div");
            checkboxUsager.className = "checkbox-usager";

            
            
            liUsager.innerHTML = element.nom || element;
            liUsager.appendChild(checkboxUsager);
            container.appendChild(liUsager);

            liUsager.addEventListener("click", () => clickedUsagerType(checkboxUsager, element.nom || element.ennemi__nom));
        });
    };

 
    ajouterUsagers(liType, choice_type);
    ajouterUsagers(usagers, choice_usager);
};

const clickedUsagerType = (checkboxUsager, usager_ennemi) => {

    
    // verifier si l element cliquer a deja la classe active
    const isActive = checkboxUsager.classList.contains("active");

    // chaque fois qu on touche un on enleve la classe pour tous
    document.querySelectorAll(".checkbox-usager").forEach(checkbox => {
        checkbox.classList.remove("active");
    });



    // si l element cliquer contient active alors on enleve et on retire let localstorage
    if (isActive) {
        
        checkboxUsager.classList.remove("active");
        
        localStorage.removeItem("ennemi__choisi");
        value_trier.innerHTML = "Date";

        // si aucun active alors on active le dernier qui est la date
        activerDernierCheckBox();
    } else {
        // sinon alors on peut activer la classe tu connais mgl
        checkboxUsager.classList.add("active");
        // tu enregiste et voila le tour est jouer
        localStorage.setItem("ennemi__choisi", usager_ennemi);
        value_trier.innerHTML = localStorage.getItem("ennemi__choisi");
    }
};



function activerDernierCheckBox() {
    let checkboxes = document.querySelectorAll(".checkbox-usager");
    checkboxes[checkboxes.length - 1].classList.add("active");
}

function retournerMenu() {
    window.location.href = "menu.php";
};