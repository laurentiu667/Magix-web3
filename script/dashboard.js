let container_dash = document.querySelector(".main-table");
let return_home = document.querySelector(".return-home");
let choice_usager = document.querySelector(".choice-usager");
let choice_type = document.querySelector(".choice-type");
let choice_container = document.querySelector(".click-choice");
let container_choice_different_data = document.querySelector(".container-choice-different-data");

let ouverture = false;
window.addEventListener("load", () => {
   stateDashboard();


   return_home.addEventListener("click", retournerMenu);
   choice_container.addEventListener("click", () => choisirType());
   
});

const stateDashboard = () => {
    
    fetch("AjaxDashboard.php", {   
        method: "POST"    
    })
    .then(response => response.json())
    .then(data => {
        
        const parties = data.parties;
        const ennemis_nom = data.ennemis;
        const joueur_nom = data.username;
    
        
        // afficher les usagers dans le trier par usager
        afficherLesUsagers(ennemis_nom);
    
        
        // si data vide
        if(parties.length == 0){
            container_dash.innerHTML = "Aucune partie n'a été jouée";
        }
        else{
            parties.forEach(element => {
                createDivForDesktop(element);
              
                
            });
        }
    
        console.log();
        
    });
}

const afficherLesUsagers = (usagers) => {
    let liType = ["Date", "Gagné", "Perdu"];


    const ajouterUsagers = (elements, container) => {
        elements.forEach(element => {
            let liUsager = document.createElement("li");
            let checkboxUsager = document.createElement("div");
            checkboxUsager.className = "checkbox-usager";

            liUsager.innerHTML = element.ennemi__nom || element; // si element.ennemi__nom existe alors met le sinon alors c est un type
            liUsager.appendChild(checkboxUsager);
            container.appendChild(liUsager);

            liUsager.addEventListener("click", () => clickedUsagerType(checkboxUsager));
        });
    };

 
    ajouterUsagers(liType, choice_type);
    ajouterUsagers(usagers, choice_usager);
};


const clickedUsagerType = (checkboxUsager) => {
    // enleve la classe qui est active des autres 
    document.querySelectorAll(".checkbox-usager").forEach(checkbox => {
        checkbox.classList.remove("active");
    });

    // ajouter active sur l element clicker
    checkboxUsager.classList.add("active");
}





function choisirType() {
    if (!ouverture) {
        container_choice_different_data.classList.add("active");
    } else {
        container_choice_different_data.classList.remove("active");
    }
    // Bascule l'état de "ouverture"
    ouverture = !ouverture;
}
function createDivForDesktop(element){
    let div_stats = document.createElement("div");
    div_stats.className = "item-stats";
    

    let joueur = document.createElement("div");
    joueur.className = "vous-items";
    let textjoueur = document.createElement("div");


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
        div_stats.classList.add("gagnant");
        div_stats.classList.remove("perdant");
  
      
    } else {
        div_stats.classList.add("perdant");
        div_stats.classList.remove("gagnant");
      
    }
  
    container_dash.appendChild(div_stats);
}


function retournerMenu() {
    window.location.href = "menu.php";
};