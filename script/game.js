let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");
let deck_container = document.querySelector(".deck-container");

let attack = document.querySelector(".attack");
let hp = document.querySelector(".hp");
let cost = document.querySelector(".cost");

let joueurnom = document.querySelector(".joueur");
let enneminom = document.querySelector(".ennemi");
let cardIDsInHand = new Set();
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
        let arrayWithCardID = [];
     
    
        waiting.style.display = "none";
        temps.innerText = data.gamestate.remainingTurnTime;
    
        // Sélectionner le conteneur des cartes
        let deck_container = document.querySelector(".deck-container");
        console.log(data.gamestate.hand);
        
      
        data.gamestate.hand.forEach(element => {
            // si le uid de la carte est la ne pas ajouter
            if (!cardIDsInHand.has(element.uid)) {
                cardIDsInHand.add(element.uid);

                // ****************************************************************************//
                // Créer la div de la carte jouable
                const newCardDiv = document.createElement('div');
                newCardDiv.id = `card-${element.id}`; // Si tu veux garder un ID unique
                newCardDiv.className = `card card-${element.id} carduid-${element.uid}`; // Ajoute plusieurs classes
              
            
                // ****************************************************************************//

                // ****************************************************************************//
                // Créer la div info-card-hover, masquée par défaut - information sur la carte
                const divInfoShowCreate = document.createElement('div');
                divInfoShowCreate.className = 'info-card-hover';
             
                divInfoShowCreate.style.display = "none"; // Masquer par défaut
                newCardDiv.appendChild(divInfoShowCreate);

                // Création des sous-div pour afficher proprement
                const titleInfo = document.createElement('div');
                const information_generale_carte = document.createElement('div');

                divInfoShowCreate.appendChild(titleInfo);
                divInfoShowCreate.appendChild(information_generale_carte);


                titleInfo.className = "titleInfo";
                information_generale_carte.className = "information_generale_carte";

                titleInfo.innerText = `carte: ${element.id}`; // Exemple de contenu
                information_generale_carte.innerText = element.mechanics;

                
                


                // ****************************************************************************//


                // ****************************************************************************//
                // Ajouter la carte au conteneur
                deck_container.appendChild(newCardDiv);
                console.log("Nouvelle carte ajoutée avec uid:", element.uid);
                // ****************************************************************************//

                // ****************************************************************************//
                // Ajoute les événements de hover pour chaque carte
                newCardDiv.addEventListener("mouseover", () => {
                    
                    hoverCardInfo(element.uid);
                });

                newCardDiv.addEventListener("mouseout", () => {
                    hideCardInfo(element.uid);
             
                });
                // ****************************************************************************//
            } else {
                console.log("Pas de nouvelle carte, déjà présente avec uid:", element.uid);
            }
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

const ajouterCreerCarteTableau = () => {

}

// Fonction pour afficher les infos de la carte
const hoverCardInfo = (cardUID) => {
    let divHovered = document.querySelector(`.carduid-${cardUID}`);
    let divInfoShow = divHovered.querySelector('.info-card-hover'); // Sélectionne l'info-card-hover DANS cette carte

    if (divInfoShow) {
        divInfoShow.style.display = "grid"; // Afficher la carte ou ses détails
    }
};

// Fonction pour masquer les infos de la carte
const hideCardInfo = (cardUID) => {
    let divHovered = document.querySelector(`.carduid-${cardUID}`);
    let divInfoShow = divHovered.querySelector('.info-card-hover'); // Sélectionne l'info-card-hover DANS cette carte

    if (divInfoShow) {
        divInfoShow.style.display = "none"; // Masquer la carte ou ses détails
    }
};



const jouerUneCarte = (cardUID) => {

    fetch("AjaxJouerCarte.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({

            type: "PLAY",
            uid: cardUID         
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("Carte jouée avec succès", data);
            
        } else {
            console.log("Erreur lors de l'action", data.error);
        }
    });

}