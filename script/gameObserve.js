let buttonObserve = document.querySelector("#button-observe");
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


const observe = () => {

    let usernameObserve = document.querySelector("#userobserve").value;
    let form = new FormData();
    form.append("username", usernameObserve);
    fetch("AjaxObserve.php", {
        method: "POST",
        body: form
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = "game.php";
        gameUpdate(data);
        
    });
}


window.addEventListener("load", () => {
    buttonObserve.addEventListener("click", () => {
        observe();
    });
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});