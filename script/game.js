import {initializationCard} from "./cards.js";
import {initializationBoardCard} from "./cards.js";
import {jouerUneCarte} from "./cards.js";
let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");
let deck_container = document.querySelector(".deck-container");
let board_ennemi = document.querySelector(".board_ennemi");
let board_joueur = document.querySelector(".board_joueur");

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
    
 
    
    if (data.gamestate == "WAITING"){
                
        console.log(data);
     
        
        waiting.style.display = "grid";
        waiting.innerText = "En attente d'un adversaire";


    } else {
        
     
        waiting.style.display = "none";
        temps.innerText = data.gamestate.remainingTurnTime;
    

        console.log(data);
        
        // hand initialisation card

        data.gamestate.hand.forEach(element => {
            
            initializationCard(element, data.gamestate);
        });

        // board initialisation card player
        data.gamestate.board.forEach(element => {
            initializationBoardCard(element, board_joueur);
        });

        // board initialisation card oppenent
        data.gamestate.opponent.board.forEach(element => {
            initializationBoardCard(element, board_ennemi);
        });

 
        // mettre le nom du joueur et de l ennemi

        

        
        enneminom.innerText = data.gamestate.opponent.username;
        joueur_vie.innerText = data.gamestate.hp;
        joueur_mana.innerText = data.gamestate.mp;
        ennemi_vie.innerText = data.gamestate.opponent.hp;
        ennemi_mana.innerText = data.gamestate.opponent.mp;
        myTurn(data);

    }
    
    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}
const myTurn = (data) => {
    const barStats = document.querySelector(".joueur");
    const barStatsOpponent = document.querySelector(".ennemi");
    if (data.gamestate.yourTurn){
        barStats.style.backgroundColor = "green";
        barStatsOpponent.style.backgroundColor = "transparent";
    } else {
        barStats.style.backgroundColor = "transparent";
        barStatsOpponent.style.backgroundColor = "green";
    }
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});



