import {initializationCard} from "./cards.js";
let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");


let joueurnom = document.querySelector(".joueur");
let enneminom = document.querySelector(".nom-ennemi");





const state = () => {
    fetch("AjaxGame.php", {   // Il faut créer cette page et son contrôleur appelle 
    method : "POST"        // l’API (games/state)
    })
.then(response => response.json())
.then(data => {
    
 
    
    if (data.gamestate == "WAITING"){
                
        console.log(data);
     
        
        waiting.style.display = "grid";
        waiting.innerText = "En attente d'un adversaire";


    } else {
        
     
        waiting.style.display = "none";
        temps.innerText = data.gamestate.remainingTurnTime;
    

        console.log(data);
        
        data.gamestate.hand.forEach(element => {
            // si le uid de la carte est la ne pas ajouter
            initializationCard(element);
        });

 
        // mettre le nom du joueur et de l ennemi

        
        enneminom.innerText = data.gamestate.opponent.username;
        myTurn(data);

    }
    
    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}
const myTurn = (data) => {
    const barStats = document.querySelector(".joueur");
    if (data.gamestate.yourTurn){
        barStats.style.backgroundColor = "green";
    } else {
        barStats.style.backgroundColor = "transparent";
    }
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});



