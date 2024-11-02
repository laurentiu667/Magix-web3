
let endturn = document.querySelector(".end-turn");
let hero = document.querySelector(".hero-button");
let surrender = document.querySelector(".surrender");
let deck_container = document.querySelector(".hand-bottom-game"); 
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
                
                }, 500);
                animationUnefois = true;
            }
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


