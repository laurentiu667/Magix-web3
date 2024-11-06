let deck_container = document.querySelector(".hand-bottom-game");
let board_joueur = document.querySelector(".board-joueur");
let board_ennemi = document.querySelector(".board-ennemi");
let attack_hero = document.querySelector(".img-div-button-game-attackhero");

let targetUID = null;
let mycardUID = null;

let messageErreur = document.querySelector(".messageErreur");

import { gameUpdate } from "./gameUpdate.js";

export class Cards {
    constructor(cardATK, cardBASEHP, cardCOST, cardHP, cardID, cardMECHANICS, cardUID, divAppend, cardIMG, cardSTATE) {
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
                console.log("Carte du joueur sélectionnée : " + mycardUID);
            }

            if (this.cardSTATE === "IDLE"){
                carteDiv.classList.toggle("idle");
            }

            attack_hero.onclick = () => {
                
                if(mycardUID != null ){
                    AttaquerUneCarte(mycardUID, 0);
                    console.log("hero attaquer");
                } else {
                    // animationMessageErreur("Veuillez sélectionner une carte");
                }
            }
        } 
        else if (this.divAppend === "board_ennemi") {
            board_ennemi.appendChild(carteDiv);
            let mechanique = this.cardMECHANICS;
            carteDiv.onclick = () => {
                targetUID = this.cardUID; 
                console.log("Carte de l'ennemi ciblée : " + targetUID);
                if (mycardUID && targetUID) {
                    AttaquerUneCarte(mycardUID, targetUID);
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
                console.log("Carte jouée : " + this.cardUID);
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
            // animationMessageErreur("Pas assez d'énergie");
        } else if (data == "NOT_YOUR_TURN"){
            // animationMessageErreur("Ce n'est pas votre tour");
        } else if (data == "BOARD_IS_FULL"){
            // animationMessageErreur("Le board est plein");
        } else {
            gameUpdate(data);
            // ici je dois update le game mais ca bug et ca me ban si je le met ici 
            console.log("voici le data apres avoir play une carte " + data);
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
            // animationMessageErreur("Vous devez attaquer la carte avec Taunt en premier");
        } else if (data == "OPPONENT_CARD_NOT_FOUND"){
            // animationMessageErreur("Carte de l'adversaire non trouvée");
        } else if (data == "OPPONENT_CARD_HAS_STEALTH"){
            // animationMessageErreur("Carte de l'adversaire a Stealth");
        } else if (data == "CARD_IS_SLEEPING"){
            // animationMessageErreur("Carte sleeping");
        }
        else{
            // reini les cartes sélectionnées
            mycardUID = null;
            targetUID = null;
            gameUpdate(data);
           
            console.log("voici le data apres avoir attaquer une carte " + data);
        }
        
    });
};

export const animationMessageErreur = (message) => {
    let count = 0;
    count++;
    console.log(count);
    
    let opacity = 0;
    let increment = 0.007; 

    messageErreur.style.opacity = "0"; 
    messageErreur.style.zIndex = "3000";

    messageErreur.innerHTML = message;

    const tick = () => {
        
        opacity += increment;

    
        messageErreur.style.opacity = opacity;

     
        if (opacity >= 1) {
            increment = -increment; 
        }

        
        if (opacity <= 0) {
            messageErreur.style.opacity = 0; 
            messageErreur.style.zIndex = "0";

            return; 
        }


        window.requestAnimationFrame(tick);
    }

    tick();
}
