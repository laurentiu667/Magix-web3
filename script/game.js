let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");
let deck_container = document.querySelector(".deck-container");

let attack = document.querySelector(".attack");
let hp = document.querySelector(".hp");
let cost = document.querySelector(".cost");

let joueurnom = document.querySelector(".joueur");
let enneminom = document.querySelector(".ennemi");
let cardIDsInHand = new Set();


let imagescartes = [
    "Images/cartes/image-1.png",
    "Images/cartes/image-2.png",
    "Images/cartes/image-3.png",
    "Images/cartes/image-4.png",
    "Images/cartes/image-5.png",
    "Images/cartes/image-6.png",
    "Images/cartes/image-7.png",
    "Images/cartes/image-8.png",
    "Images/cartes/image-9.png",
    "Images/cartes/image-10.png",
    "Images/cartes/image-11.png",
    "Images/cartes/image-12.png",
    "Images/cartes/image-13.png",
    "Images/cartes/image-14.png",
    "Images/cartes/image-15.png",
    "Images/cartes/image-16.png"
];

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
    

        console.log(data.gamestate.hand);
        
        data.gamestate.hand.forEach(element => {
            // si le uid de la carte est la ne pas ajouter
            initializationCard(element);
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

//create all card 
const initializationCard = (element) => {
    if (!cardIDsInHand.has(element.uid)) {
        cardIDsInHand.add(element.uid);

        //****************************************************************************//
        // Créer la div de la carte jouable
        const newCardDiv = document.createElement('div');
        newCardDiv.id = `card-${element.id}`; // Si tu veux garder un ID unique
        newCardDiv.className = `card card-${element.id} carduid-${element.uid}`; // Ajoute plusieurs classes
      
        // attribuer une image aléatoire
        let randomImage = Math.floor(Math.random() * imagescartes.length);
        newCardDiv.style.backgroundImage = `url(${imagescartes[randomImage]})`;

        //****************************************************************************//

        //****************************************************************************//
        // Créer la div info-card-hover, masquée par défaut - information sur la carte
        const divInfoShowCreate = document.createElement('div');
        divInfoShowCreate.className = 'info-card-hover';
     
        divInfoShowCreate.style.display = "none"; 
        newCardDiv.appendChild(divInfoShowCreate);

        // Création des sous-div pour afficher proprement
        const infoImageCardHover = document.createElement('div');
        const information_generale_carte = document.createElement('div');
        
        infoImageCardHover.className = 'info-image-card-hover';
        information_generale_carte.className = 'information-generale-carte';

        divInfoShowCreate.appendChild(infoImageCardHover);
        divInfoShowCreate.appendChild(information_generale_carte);

        const imageUnderCard = document.createElement('div');
        imageUnderCard.className = 'image-under-card';
        imageUnderCard.style.backgroundImage = `url(${imagescartes[randomImage]})`;

        infoImageCardHover.appendChild(imageUnderCard);



        const mechanicDiv = document.createElement('div');
        mechanicDiv.className = 'mechanic';
        mechanicDiv.innerText = "mechanique";
        const mechanicDescDiv = document.createElement('div');
        mechanicDescDiv.className = 'mechanic-desc';

        if (element.mechanics.length == 0) {
            mechanicDescDiv.innerText = "Aucune mécanique";
        } else {
            mechanicDescDiv.innerText = element.mechanics;
        }
       

        const bioMechanicDiv = document.createElement('div');
        bioMechanicDiv.className = 'bio-mechanic';

        const buttonAddCardDiv = document.createElement('button');
        buttonAddCardDiv.className = 'button-play';
        buttonAddCardDiv.innerText = "jouer la carte";

        const bioDivforAll = document.createElement('div');
        bioDivforAll.className = 'bio-div-for-all';

        const bioTitle = document.createElement('div');
        const bioNumber = document.createElement('div');
        bioTitle.className = 'bio-title';
        bioNumber.className = 'bio-number';

        information_generale_carte.appendChild(mechanicDiv);
        information_generale_carte.appendChild(mechanicDescDiv);
        information_generale_carte.appendChild(bioMechanicDiv);
        information_generale_carte.appendChild(buttonAddCardDiv);

        //****************************************************************************//
        // creation des div pour les informations de la carte
        for (let i = 0; i < 3; i++) {
            const titleArray = ["attaque", "vie", "coût"];
            const numberArray = [element.atk, element.hp, element.cost];
            const bioDivforAll = document.createElement('div');
            bioDivforAll.className = 'bio-div-for-all';

            const bioTitle = document.createElement('div');
            const bioNumber = document.createElement('div');
            bioTitle.className = 'bio-title';
            bioNumber.className = `bio-number-${i + 1}`;

            bioTitle.innerText = titleArray[i];
            bioNumber.innerText = numberArray[i];

            bioDivforAll.appendChild(bioTitle);
            bioDivforAll.appendChild(bioNumber);

            
            bioMechanicDiv.appendChild(bioDivforAll);
        }
       
       


        //****************************************************************************//


        //****************************************************************************//
        // Ajouter la carte au conteneur
        deck_container.appendChild(newCardDiv);
        console.log("Nouvelle carte ajoutée avec uid:", element.uid);
        //****************************************************************************//

        //****************************************************************************//
        // Ajoute les événements de hover pour chaque carte
        newCardDiv.addEventListener("mouseover", () => {
            
            hoverCardInfo(element.uid);
        });

        newCardDiv.addEventListener("mouseout", () => {
            hideCardInfo(element.uid);
     
        });
        //****************************************************************************//
    } else {
        console.log("Pas de nouvelle carte, déjà présente avec uid:", element.uid);
    }

    
}

// Fonction pour afficher les infos de la carte
const hoverCardInfo = (cardUID) => {
    let divHovered = document.querySelector(`.carduid-${cardUID}`);
    let divInfoShow = divHovered.querySelector('.info-card-hover'); 
    
    if (divInfoShow) {
        
        divInfoShow.style.display = "grid"; 

    }
};

// Fonction pour masquer les infos de la carte
const hideCardInfo = (cardUID) => {
    let divHovered = document.querySelector(`.carduid-${cardUID}`);
    let divInfoShow = divHovered.querySelector('.info-card-hover'); 

    if (divInfoShow) {
        divInfoShow.style.display = "none"; 
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