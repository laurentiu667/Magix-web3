let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");
let deck_container = document.querySelector(".deck-container");

let joueurnom = document.querySelector(".joueur");
let enneminom = document.querySelector(".nom-ennemi");
let endturn = document.querySelector(".end-turn");

let board_joueur = document.querySelector(".board_joueur");
let board_ennemi = document.querySelector(".board_ennemi");

let joueur_vie = document.querySelector("#joueur-vie");
let joueur_mana = document.querySelector("#joueur-mana");
let ennemi_vie = document.querySelector("#ennemi-vie");
let ennemi_mana = document.querySelector("#ennemi-mana");

import { Cards } from "./cards.js";

let currentHandCount = 0; 
let currentBoardCount = 0;
let currentBoardCountEnnemi = 0;


const state = () => {
    fetch("AjaxGame.php", {   // Il faut créer cette page et son contrôleur appelle 
    method : "POST"        // l’API (games/state)
    })
    .then(response => response.json())
    .then(data => {
   
        gameUpdate(data);

        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    
    })
};



const gameUpdate = (data) => {
    console.log(data);

    if (data === "WAITING") {
        
        
        waiting.style.display = "grid";
        waiting.innerHTML = "en attente";
    } else if (data === "LAST_GAME_WON") {
        waiting.style.display = "grid";
        waiting.innerHTML = "gagner mgl";

    } else if (data === "LAST_GAME_LOST") {
        waiting.style.display = "grid";
        waiting.innerHTML = "t trop nul";
    } else {
        waiting.style.display = "none";

        // METTRE A JOUR LES INFOS DU JOUEUR
        joueur_vie.innerHTML = data.hp;
        joueur_mana.innerHTML = data.mp;
        ennemi_vie.innerHTML = data.opponent.hp;
        ennemi_mana.innerHTML = data.opponent.mp;
        temps.innerHTML = data.remainingTurnTime;

        

        // Vérifie si le nombre de cartes a changé
        if (data.board.length !== currentBoardCount) {
            // Met à jour le compteur
            currentBoardCount = data.board.length;
            
            board_joueur.innerHTML = '';
            data.board.forEach(carte => {
                let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "board_joueur");
            });
        } 
        else if(data.opponent.board.length !== currentBoardCountEnnemi) {
            currentBoardCountEnnemi = data.opponent.board.length;
            board_ennemi.innerHTML = '';
            data.opponent.board.forEach(carte => {
                let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "board_ennemi");
            });
        } 
        else {
             // Met à jour le compteur
             currentHandCount = data.hand.length;

          
             deck_container.innerHTML = ''; 
             data.hand.forEach(carte => {
                 let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "deck_container");
                
             });
        }
    }
};

const endTurn = () => {
    

    fetch("AjaxEndTurn.php", {})
    .then(response => response.json())
    .then(data => {
        gameUpdate(data);
        
    });
}

window.addEventListener("load", () => {
    endturn.addEventListener("click", () => {
        console.log("endturn");
        
        endTurn();
    });
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});