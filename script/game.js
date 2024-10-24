import {initializationCard} from "./cards.js";
import {initializationBoardCardEnnemi} from "./cards.js";
import {forEachButtonClick} from "./cards.js";
import {forEachButtonClickAttack} from "./cards.js";


let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");
let deck_container = document.querySelector(".deck-container");



let joueurnom = document.querySelector(".joueur");
let enneminom = document.querySelector(".nom-ennemi");


let joueur_vie = document.querySelector("#joueur-vie");
let joueur_mana = document.querySelector("#joueur-mana");
let ennemi_vie = document.querySelector("#ennemi-vie");
let ennemi_mana = document.querySelector("#ennemi-mana");





const state = () => {
    fetch("AjaxGame.php", {   // Il faut créer cette page et son contrôleur appelle 
    method : "POST"        // l’API (games/state)
    })
.then(response => response.json())
.then(data => {
    
    console.log(data);
 
    
    if (data.gamestate == "WAITING"){
        waiting.style.display = "grid";
        waiting.innerText = "En attente d'un adversaire";


    } else {
        
     
        waiting.style.display = "none";
        temps.innerText = data.gamestate.remainingTurnTime;
    
        data.gamestate.hand.forEach(element => {
            
            initializationCard(element);
        });

        
        data.gamestate.opponent.board.forEach(element => {
            initializationBoardCardEnnemi(element);
        });

 

        
        enneminom.innerText = data.gamestate.opponent.username;
        joueur_vie.innerText = data.gamestate.hp;
        joueur_mana.innerText = data.gamestate.mp;
        ennemi_vie.innerText = data.gamestate.opponent.hp;
        ennemi_mana.innerText = data.gamestate.opponent.mp;
        myTurn(data);

        // play cart
        forEachButtonClick()

        forEachButtonClickAttack()

    }
    
    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}
const myTurn = (data) => {
    const barStats = document.querySelector(".joueur");
    const barStatsOpponent = document.querySelector(".ennemi");
    if (data.gamestate.yourTurn){
        barStats.style.backgroundColor = "rgba(255, 0, 0, 0.247)";
        barStatsOpponent.style.backgroundColor = "transparent";
    } else {
        barStats.style.backgroundColor = "transparent";
        barStatsOpponent.style.backgroundColor = "rgba(255, 0, 0, 0.247)";
    }
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});



