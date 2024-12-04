let deck_container = document.querySelector(".hand-bottom-game");
let board_joueur = document.querySelector(".container-hand-joueur");
let board_ennemi = document.querySelector(".container-hand-ennemi");
let attack_hero = document.querySelector(".img-div-button-game-attackhero");

let targetUID = null;
let mycardUID = null;

let messageErreur = document.querySelector(".messageErreur");

import { gameUpdate } from "./gameUpdate.js";
import { afficher_tour_joueur_ou_erreur } from "./gameUpdate.js";

export class Cards {
    constructor(cardATK, cardBASEHP, cardCOST, cardHP, cardID, cardMECHANICS, cardUID, divAppend, cardIMG, cardSTATE, yourTurn) {
        this.cardATK = cardATK;
        this.cardBASEHP = cardBASEHP;
        this.cardCOST = cardCOST;
        this.cardHP = cardHP;
        this.cardID = cardID;
        this.cardMECHANICS = cardMECHANICS;
        this.cardUID = cardUID;
        this.divAppend = divAppend;
        this.cardIMG = cardIMG;
        this.cardSTATE = cardSTATE;
        this.yourTurn = yourTurn;
        this.creationCarteDiv();
    }

    // CREATION DES CARTES DIV
    creationCarteDiv() {
        let carteDiv = document.createElement("div");

        carteDiv.classList.add("carte");
        let cardeWrapper = document.createElement("div");
        cardeWrapper.classList.add("carteWrapper");
        cardeWrapper.style.backgroundImage = `url(Images/cartes-images/${this.cardIMG}.png)`;
      
        carteDiv.appendChild(cardeWrapper);

        let atk = document.createElement("div");
        atk.classList.add("atk");
        atk.innerHTML = this.cardATK;
        cardeWrapper.appendChild(atk);

        let hp = document.createElement("div");
        hp.classList.add("hp");
        hp.innerHTML = this.cardHP;
        cardeWrapper.appendChild(hp);

        let cost = document.createElement("div");
        cost.classList.add("cost");
        cost.innerHTML = this.cardCOST;
        cardeWrapper.appendChild(cost);

        let mechanics = document.createElement("div");
        mechanics.classList.add("mechanics");
        mechanics.innerHTML = this.cardMECHANICS;
        cardeWrapper.appendChild(mechanics);

        // Ajout des divs dans le board
        if (this.divAppend === "board_joueur") {
            board_joueur.appendChild(carteDiv);
        
            carteDiv.onclick = () => {
                mycardUID = this.cardUID; 
            }
            if (this.cardSTATE === "IDLE" && this.yourTurn === true){
                carteDiv.classList.toggle("idle");
            }
            attack_hero.onclick = () => {
                
                if(mycardUID != null ){
                    AttaquerUneCarte(mycardUID, 0);
                    
                }
            }
        } 
        else if (this.divAppend === "board_ennemi") {
            board_ennemi.appendChild(carteDiv);
            let mechanique = this.cardMECHANICS;
            carteDiv.onclick = () => {
                targetUID = this.cardUID; 
                
                if (mycardUID && targetUID) {
                    AttaquerUneCarte(mycardUID, targetUID, carteDiv);
                }
            }
            mechanique.forEach(element => {
                if (element === "Taunt"){
                   
                    carteDiv.classList.toggle("taunt");
                } else if(element === "Stealth"){
                    carteDiv.classList.toggle("stealth");
                }
            });
        } 
        else {
            deck_container.appendChild(carteDiv);
            
            carteDiv.onclick = () => {
                jouerUneCarte(this.cardUID);
              
            }
        }
    }
}

// Fonction pour jouer une carte
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
        if (data == "NOT_ENOUGH_ENERGY"){
            afficher_tour_joueur_ou_erreur("Pas assez d'énergie", "#D43232");
        } else if (data == "NOT_YOUR_TURN"){
            afficher_tour_joueur_ou_erreur("Ce n'est pas votre tour", "#D43232");
        } else if (data == "BOARD_IS_FULL"){
            afficher_tour_joueur_ou_erreur("Le board est plein", "#D43232");
        } else {
            gameUpdate(data);
            
        }
    });
};

// Fonction pour attaquer une carte
const AttaquerUneCarte = (cardUID, targetUID) => {
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
        if (data == "MUST_ATTACK_TAUNT_FIRST"){
            afficher_tour_joueur_ou_erreur("attaquez taunt", "#D43232");
        } else if (data == "OPPONENT_CARD_NOT_FOUND"){
            afficher_tour_joueur_ou_erreur("carte adversaire pas trouvé", "#484848");
        } else if (data == "OPPONENT_CARD_HAS_STEALTH"){
            afficher_tour_joueur_ou_erreur("carte stealth, non-attaquable ", "#e3ff64");
        } else if (data == "CARD_IS_SLEEPING"){
            afficher_tour_joueur_ou_erreur("Carte endormie", "#ff7300");
        }
        else{
            // reini les cartes sélectionnées
            mycardUID = null;
            targetUID = null;
            gameUpdate(data);
        }
    });
};
