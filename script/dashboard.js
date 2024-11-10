let container_dash = document.querySelector(".main-table");
window.addEventListener("load", () => {
   stateDashboard();
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
        console.log(ennemis_nom);
        console.log(joueur_nom);
        
        // si data vide
        if(parties.length == 0){
            container_dash.innerHTML = "Aucune partie n'a été jouée";
        }
        else{
            parties.forEach(element => {
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
                
            });
        }
    
        console.log();
        
    });
}
