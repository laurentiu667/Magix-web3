let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");
let deck_container = document.querySelector(".deck-container");

let attack = document.querySelector(".attack");
let hp = document.querySelector(".hp");
let cost = document.querySelector(".cost");

let joueurnom = document.querySelector(".joueur");
let enneminom = document.querySelector(".ennemi");
const state = () => {
    fetch("AjaxGame.php", {   // Il faut créer cette page et son contrôleur appelle 
    method : "POST"        // l’API (games/state)
    })
.then(response => response.json())
.then(data => {
    
  
    
    if (data.gamestate == "WAITING"){
                
        console.log(data);
     
        
        waiting.style.display = "grid";


    } else {
        console.log("La partie a commencé");
        console.log(data);
    
        waiting.style.display = "none";
        temps.innerText = data.gamestate.remainingTurnTime;
    
        // Sélectionner le conteneur des cartes
        let deck_container = document.querySelector(".deck-container");
    
        // Vider le conteneur des cartes
        deck_container.innerHTML = "";
    
        data.gamestate.hand.forEach(element => {
            let createCard = document.createElement("div");
            createCard.className = "card";
        
            // Créer des éléments pour chaque propriété de la carte
            let cost = document.createElement("div");
            cost.className = "cost";
            cost.innerText = element.cost
        
            let hp = document.createElement("div");
            hp.className = "hp";
            hp.innerText = element.hp
        
            let attack = document.createElement("div");
            attack.className = "attack";
            attack.innerText = element.atk
        
            // Ajouter les éléments de propriété au conteneur de la carte
            createCard.appendChild(cost);
            createCard.appendChild(hp);
            createCard.appendChild(attack);
        
            // Ajouter le conteneur de la carte au conteneur principal
            deck_container.appendChild(createCard);
        });


        // mettre le nom du joueur et de l ennemi

        enneminom.innerText = data.gamestate.opponent.username;

        
        
    }
    
    setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}

window.addEventListener("load", () => {
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

