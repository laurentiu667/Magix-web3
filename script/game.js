
let endturn = document.querySelector(".end-turn");



import { gameUpdate } from "./gameUpdate.js";


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

window.addEventListener("load", () => {
    endturn.addEventListener("click", () => {
        console.log("endturn");
        
        endTurn();
    });
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});