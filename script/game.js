
let endturn = document.querySelector(".img-div-button-game-endturn");
let hero = document.querySelector(".img-div-button-game-hero");
let surrender = document.querySelector(".img-div-button-game-forfeit");
let deck_container = document.querySelector(".hand-bottom-game"); 
let board_joueur = document.querySelector(".board-joueur");
let board_ennemi = document.querySelector(".board-ennemi");
let left_game = document.querySelector(".left-game");
let right_game = document.querySelector(".right-game");

let ennemi_card_board_count = document.querySelector(".ennemi-card-board-count"); 
import { gameUpdate } from "./gameUpdate.js";

import { animationMessageErreur } from "./cards.js";
let animationUnefois = false;
window.addEventListener("load", () => {
    endturn.addEventListener("click", () => {
        console.log("endturn");
        
        endTurn();
    });
    hero.addEventListener("click", () => {
        console.log("hero");
        
        heroPower();
    });
    surrender.addEventListener("click", () => {
        console.log("surrender");
        
        surrenderGame();
    });
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

const state = () => {
    console.log("Appel de la fonction state");
    fetch("AjaxGame.php", {   
        method: "POST"    
    })
    .then(response => response.json())
    .then(data => {
        if(data != "WAITING"){
           
            if(animationUnefois == false){
                //settimeout pour laisser le temps à la carte de se jouer
                setTimeout(() => {
                    deck_container.classList.toggle("animation");
                    ennemi_card_board_count.classList.toggle("animation");
                   
                    

                }, 100);

                setTimeout(() => {
                    left_game.classList.toggle("animation");
                    right_game.classList.toggle("animation");

                }, 300);
                setTimeout(() => {
                    board_ennemi.classList.toggle("animation");
                    board_joueur.classList.toggle("animation");

                }, 800);
                animationUnefois = true;
            }
        } else {

        }
        gameUpdate(data);
        setTimeout(state, 1000);
    })
    .catch(error => {
        console.error("Erreur lors de la récupération de l'état:", error);
        setTimeout(state, 1000);
    });
};



const endTurn = () => {
    fetch("AjaxEndTurn.php", {})
    .then(response => response.json())
    .then(data => {
        gameUpdate(data);
        
    });
}

const heroPower = () => {
    fetch("AjaxHeropower.php", {})
    .then(response => response.json())
    .then(data => {
        if(data == "HERO_POWER_ALREADY_USED"){
            // animationMessageErreur("Pouvoir héroique déjà utilisé");
        } 
        else if (data == "NOT_ENOUGH_ENERGY"){
            // animationMessageErreur("Pas assez de mana");
        }
        else {
            gameUpdate(data);
        }
        
        
    });
}
const surrenderGame = () => {
    fetch("AjaxSurrender.php", {})
    .then(response => response.json())
    .then(data => {
        gameUpdate(data);
    
    });
}


