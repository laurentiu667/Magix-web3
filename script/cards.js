let deck_container = document.querySelector(".deck-container");
let cardIDsInHand = new Set();
let cardIDsIsInBoardJoueur = new Set();
let cardIDsIsInBoardEnnemi = new Set();

let endTurnDiv = document.querySelector(".end-turn");
let board_joueur = document.querySelector(".board_joueur");
let board_ennemi = document.querySelector(".board_ennemi");
let imagescartes = [
    "Images/cartes/image-1.svg",
    "Images/cartes/image-2.svg",
    "Images/cartes/image-3.svg",
    "Images/cartes/image-4.svg",
    "Images/cartes/image-5.svg",
    "Images/cartes/image-6.svg",
    "Images/cartes/image-7.svg",
    "Images/cartes/image-8.svg",
    "Images/cartes/image-9.svg",
    "Images/cartes/image-10.svg",
    "Images/cartes/image-11.svg",
    "Images/cartes/image-12.svg",
    "Images/cartes/image-13.svg",
    "Images/cartes/image-14.svg",
    "Images/cartes/image-15.svg",
    "Images/cartes/image-16.svg",
    "Images/cartes/image-17.svg",
    "Images/cartes/image-18.svg",
    "Images/cartes/image-19.svg",
    "Images/cartes/image-20.svg",
    "Images/cartes/image-21.svg",
    "Images/cartes/image-22.svg",
    "Images/cartes/image-23.svg",
    "Images/cartes/image-24.svg",
    "Images/cartes/image-25.svg",
    "Images/cartes/image-26.svg"
];

//create all card 
export const initializationCard = (element) => {


    
    if (!cardIDsInHand.has(element.uid)) {
        cardIDsInHand.add(element.uid);

        //****************************************************************************//
        // Créer la div de la carte jouable
        const newCardDiv = document.createElement('div');
        newCardDiv.id = `card-${element.id}`; 
        newCardDiv.className = `card card-${element.id} carduid-${element.uid}`; // Ajoute plusieurs classes
      
        // attribuer une image aléatoire
        let randomImage = Math.floor(Math.random() * 25) + 1;


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
        // Ajouter la carte au conteneur
        deck_container.appendChild(newCardDiv);
        
       
        //****************************************************************************//
        // Ajoute les événements de hover pour chaque carte
        newCardDiv.addEventListener("mouseover", () => {
            
            hoverCardInfo(element.uid);
        });

        newCardDiv.addEventListener("mouseout", () => {
            hideCardInfo(element.uid);
     
        });

        //****************************************************************************//
        buttonAddCardDiv.onclick = () => {
           
            jouerUneCarte(element.uid); 
           
        };

        endTurnDiv.addEventListener("click", () => {
            EndTurn();
        });


        } else {
          
        }
    };

    

const initializationBoardCard = (element, divboard, backgroundCard) => {
   
   
    
    if (!cardIDsIsInBoardJoueur.has(element.uid)) {
        cardIDsIsInBoardJoueur.add(element.uid);
        
        // Créer les cartes du board
        const newCardDiv = document.createElement('div');
        newCardDiv.id = element.id;
        newCardDiv.className = `card-board card-board-${element.id} carduid-${element.uid}`; 

        // divImageCardBoard
        const divImageCardBoard = document.createElement('div');
        divImageCardBoard.className = 'image-board-card';

        // Mettre backgroundCard
        divImageCardBoard.style.backgroundImage = backgroundCard;

        

        // Information sur la carte
        const divInfoShowCreate = document.createElement('div');
        divInfoShowCreate.className = 'info-board-card';

        // Création des sous-div pour afficher proprement
        const attackDiv = document.createElement('div');
        const hpDiv = document.createElement('div');
        const costDiv = document.createElement('div');

        attackDiv.className = 'attack-board';
        hpDiv.className = 'hp-board';
        costDiv.className = 'cost-board';

        attackDiv.innerText = element.atk;
        hpDiv.innerText = element.hp;
        costDiv.innerText = element.cost;

        // Append
        newCardDiv.appendChild(divImageCardBoard);
        newCardDiv.appendChild(divInfoShowCreate);

        divInfoShowCreate.appendChild(attackDiv);
        divInfoShowCreate.appendChild(hpDiv);
        divInfoShowCreate.appendChild(costDiv);

        divboard.appendChild(newCardDiv);
    }
};


export const initializationBoardCardEnnemi = (element) => {
   
   
    
    if (!cardIDsIsInBoardEnnemi.has(element.uid)) {
        cardIDsIsInBoardEnnemi.add(element.uid);

       
        
        // Créer les cartes du board
        const newCardDiv = document.createElement('div');
        newCardDiv.id = element.id;
        newCardDiv.className = `card-board card-board-${element.id} carduid-${element.uid}`; 

        // divImageCardBoard
        const divImageCardBoard = document.createElement('div');
        divImageCardBoard.className = 'image-board-card';

        // Mettre backgroundCard
        // generer de 1 a 26
        let randomImage = Math.floor(Math.random() * 25) + 1;
        divImageCardBoard.style.backgroundImage = `url(${imagescartes[randomImage]})`;

        

        // Information sur la carte
        const divInfoShowCreate = document.createElement('div');
        divInfoShowCreate.className = 'info-board-card';

        // Création des sous-div pour afficher proprement
        const attackDiv = document.createElement('div');
        const hpDiv = document.createElement('div');
        const costDiv = document.createElement('div');

        attackDiv.className = 'attack-board';
        hpDiv.className = 'hp-board';
        costDiv.className = 'cost-board';

        attackDiv.innerText = element.atk;
        hpDiv.innerText = element.hp;
        costDiv.innerText = element.cost;

        // Append
        newCardDiv.appendChild(divImageCardBoard);
        newCardDiv.appendChild(divInfoShowCreate);

        divInfoShowCreate.appendChild(attackDiv);
        divInfoShowCreate.appendChild(hpDiv);
        divInfoShowCreate.appendChild(costDiv);

        board_ennemi.appendChild(newCardDiv);
    }
};


// Fonction pour afficher les infos de la carte
const hoverCardInfo = (cardUID) => {
    let divHovered = document.querySelector(`.carduid-${cardUID}`);
    let divInfoShow = divHovered.querySelector('.info-card-hover'); 
    
    if (divInfoShow) {
        
        divInfoShow.classList.add("active-hover"); 
    }
};

// Fonction pour masquer les infos de la carte
const hideCardInfo = (cardUID) => {
    let divHovered = document.querySelector(`.carduid-${cardUID}`);
    let divInfoShow = divHovered.querySelector('.info-card-hover'); 

    if (divInfoShow) {
    
        divInfoShow.classList.remove("active-hover"); 
    }
};




const jouerUneCarte = (cardUID) => {
    let form = new FormData();

    form.append("cardUID", cardUID);
    form.append("type", "PLAY");

    fetch("AjaxJouerCarte.php", {
        method: "POST",
        body: form

    })
    .then(response => response.json())
    .then(data => {
        // si joueur click jouer la carte sur le button 
        
       console.log(cardUID);
       
        
        
            
        if(data.result != "NOT_ENOUGH_ENERGY"){
        
           
            let cardretirer = document.querySelector(`.deck-container .carduid-${cardUID}`);
            console.log(cardretirer);
            
            let getImage = cardretirer.style.backgroundImage;
            console.log(getImage);
            
            data.result.board.forEach(element => {
                initializationBoardCard(element, board_joueur, getImage);
                
            });

            cardretirer.remove();
        } else {
            console.log(data.result);
        }
    
    
        
    });

};



const AttackUneCarte = (cardUID, targetUID) => {
    let form = new FormData();

    form.append("cardUID", cardUID);
    form.append("targetUID", targetUID);
    form.append("type", "ATTACK");

    fetch("AjaxJouerCarte.php", {
        method: "POST",
        body: form

    })
    .then(response => response.json())
    .then(data => {
    
        
       if (data.result == "MUST_ATTACK_TAUNT_FIRST"){
            console.log("tu dois attaquer les cartes taunt en premier");
            console.log(data);
        } else {
            console.log(data);
       }
       
        

    
        
    });

};

const EndTurn = () => {
    fetch("AjaxEndTurn.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            type: "END_TURN"
        })
    })
    .then(response => response.json())
    .then(data => {

        
        
       
    })
  
};