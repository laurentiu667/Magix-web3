let deck_container = document.querySelector(".deck-container");
let board_joueur = document.querySelector(".board_joueur");
let board_ennemi = document.querySelector(".board_ennemi");

let targetUID = null;
let mycardUID = null;

export class Cards {
    constructor(cardATK, cardBASEHP, cardCOST, cardHP, cardID, cardMECHANICS, cardUID, divAppend) {
        this.cardATK = cardATK;
        this.cardBASEHP = cardBASEHP;
        this.cardCOST = cardCOST;
        this.cardHP = cardHP;
        this.cardID = cardID;
        this.cardMECHANICS = cardMECHANICS;
        this.cardUID = cardUID;
        this.divAppend = divAppend;
        this.creationCarteDiv();
    }

    // CREATION DES CARTES DIV
    creationCarteDiv() {
        let carteDiv = document.createElement("div");
        carteDiv.classList.add("carte");

        let carteImgDiv = document.createElement("div");
        let carteInformationDiv = document.createElement("div");
        carteImgDiv.className = "carteImg";
        carteInformationDiv.className = "carteInformation";

        carteDiv.appendChild(carteImgDiv);
        carteDiv.appendChild(carteInformationDiv);

        let carteAttaqueDiv = document.createElement("div");
        let carteVieDiv = document.createElement("div");
        let carteCoutDiv = document.createElement("div");
        let carteUidDiv = document.createElement("div");
        let mechanicDiv = document.createElement("div");

        carteInformationDiv.appendChild(carteAttaqueDiv);
        carteInformationDiv.appendChild(carteVieDiv);
        carteInformationDiv.appendChild(carteCoutDiv);
        carteInformationDiv.appendChild(carteUidDiv);
        carteInformationDiv.appendChild(mechanicDiv);

        carteAttaqueDiv.innerText = "ATK : " + this.cardATK;
        carteVieDiv.innerText = "HP : " + this.cardHP;
        carteCoutDiv.innerText = "COST : " + this.cardCOST;
        carteUidDiv.innerText = "UID : " + this.cardUID;
        mechanicDiv.innerText = "MECHANICS : " + this.cardMECHANICS;


        if(this.cardMECHANICS === "Taunt"){
            carteDiv.style.border = "2px solid red";
        }


        // Ajout des divs dans le board
        if (this.divAppend === "board_joueur") {
            board_joueur.appendChild(carteDiv);

        
            carteDiv.onclick = () => {
                mycardUID = this.cardUID; 
                console.log("Carte du joueur sélectionnée : " + mycardUID);
            }
        } else if (this.divAppend === "board_ennemi") {
            board_ennemi.appendChild(carteDiv);
            carteDiv.onclick = () => {
                targetUID = this.cardUID; 
                console.log("Carte de l'ennemi ciblée : " + targetUID);
                if (mycardUID && targetUID) {
                    AttaquerUneCarte(mycardUID, targetUID);
                }
            }
        } else {
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
        // ici je dois update le game mais ca bug et ca me ban si je le met ici 
        console.log("voici le data apres avoir play une carte " + data);
        
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
        // reini les cartes sélectionnées
        mycardUID = null;
        targetUID = null;

        // ici je dois update le game mais ca bug et ca me ban si je le met ici 
        console.log("voici le data apres avoir attaquer une carte " + data);
    });
};
