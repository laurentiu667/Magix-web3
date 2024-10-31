
let endturn = document.querySelector(".end-turn");
let hero = document.querySelector(".hero-button");
let surrender = document.querySelector(".surrender");

import { gameUpdate } from "./gameUpdate.js";

import { animationMessageErreur } from "./cards.js";
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
            animationMessageErreur("Pouvoir héroique déjà utilisé");
        } 
        else if (data == "NOT_ENOUGH_ENERGY"){
            animationMessageErreur("Pas assez de mana");
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