let board_joueur = document.querySelector(".board-joueur");
let board_ennemi = document.querySelector(".board-ennemi");
let deck_container = document.querySelector(".hand-bottom-game"); 
let ennemi_card_board_count = document.querySelector(".ennemi-card-board-count"); 
// let temps = document.querySelector(".temps");

let joueur_vie = document.querySelector(".number-cercle-health");
let joueur_mana = document.querySelector(".number-cercle-mana");
let ennemi_vie = document.querySelector(".number-cercle-health-ennemi");
let ennemi_mana = document.querySelector(".number-cercle-mana-ennemi");
let ennemi_nom = document.querySelector(".name-player-ennemi")
let joueur_message = document.querySelector(".message-div")
let ennemi_message = document.querySelector(".message-div-ennemi")
let ennemi_card_number = document.querySelector(".number-card-ennemi")
let joueur_card_number = document.querySelector(".number-card")


let healthbarjoueur = document.querySelector(".health-progress")
let manabarjoueur = document.querySelector(".mana-progress")

let healthbarennemi = document.querySelector(".health-progress-ennemi")
let manabarennemi = document.querySelector(".mana-progress-ennemi")
let temps_restant = document.querySelector(".temps-restant")
let temps_restant_ennemi = document.querySelector(".temps-restant-ennemi")

let danger_alert = document.querySelector(".danger-alert");

// let enneminom = document.querySelector(".nom-ennemi");
import { Cards } from "./cards.js";


let imagesMap = {}; // hashmap => uid => randomIMG



export const gameUpdate = (data) => {
  
    

    if (data === "WAITING") {
        console.log(data);
    } else if (data === "LAST_GAME_WON") {
        console.log("gagné");
    } else if (data === "LAST_GAME_LOST") {
        console.log("perdu");
    } else {

        // METTRE A JOUR LES INFOS DU JOUEUR
        joueur_vie.innerHTML = data.hp;
        joueur_mana.innerHTML = data.mp;
        ennemi_vie.innerHTML = data.opponent.hp;
        ennemi_mana.innerHTML = data.opponent.mp;
        ennemi_nom.innerHTML = data.opponent.username;
        joueur_message.innerHTML = data.welcomeText
        ennemi_message.innerHTML = data.opponent.welcomeText
        joueur_card_number.innerHTML = data.remainingCardsCount
        ennemi_card_number.innerHTML = data.opponent.remainingCardsCount

        
        if (data.yourTurn){
            avertirjoueurdangerTemps(data.remainingTurnTime);
            temps_restant_ennemi.innerHTML = "wait for your turn";
            temps_restant.innerHTML = data.remainingTurnTime;
        } else {
            danger_alert.classList.remove("animation");
            danger_alert.classList.remove("animation-extra-danger");
            danger_alert.style.opacity = 0;
            temps_restant_ennemi.innerHTML = data.remainingTurnTime;
            temps_restant.innerHTML = "wait for your turn";
        }

        // temps.innerHTML = data.remainingTurnTime;
        mettreajourbardevieetmana(data.hp, data.mp, data.opponent.hp, data.opponent.mp, data.maxHp, data.maxMp);
    
        console.log(data);
        
        deck_container.innerHTML = ''; 
        data.hand.forEach(carte => {
            
            if (!imagesMap[carte.uid]) {

                // comme si je faisais { uid: 1, randomIMG: 1 }
                imagesMap[carte.uid] = Math.floor(Math.random() * 26) + 1;
            }
            let randomIMG = imagesMap[carte.uid];
            let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "deck_container", randomIMG, carte.state);
        });

        board_joueur.innerHTML = '';
        data.board.forEach(carte => {
         
            
            let randomIMG = imagesMap[carte.uid];
            let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "board_joueur", randomIMG, carte.state);
        });
    
        board_ennemi.innerHTML = '';
        data.opponent.board.forEach(carte => {
            if (!imagesMap[carte.uid]) {
                imagesMap[carte.uid] = Math.floor(Math.random() * 26) + 1;
            }
            let randomIMG = imagesMap[carte.uid];
            let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "board_ennemi", randomIMG, carte.state);
        });
        ennemi_card_board_count.innerHTML = '';
        for (let i = 0; i < data.opponent.handSize; i++) {
            let divCarteEnnemiCounter = document.createElement("div");
            divCarteEnnemiCounter.classList.add("carteEnnemiCount");
            ennemi_card_board_count.appendChild(divCarteEnnemiCounter);
        }

        

    }
};

const mettreajourbardevieetmana = (healthjoueur, manajoueur, healthennemi, manaennemi, maxhealth, maxmana) => {

    // max health est à 100%
    // max mana est à 70%

    let valeurDivProgressHealthJoueur = (healthjoueur / maxhealth) * 100; 
    let valeurDivProgressManaJoueur = (manajoueur / maxmana) * 100;
    
    let valeurDivProgressHealthEnnemi = (healthennemi / maxhealth) * 100; 
    let valeurDivProgressManaEnnemi = (manaennemi / maxmana) * 100;

    if (manajoueur >= maxmana){
        valeurDivProgressManaJoueur = 100;
    } else if (manaennemi >= maxmana){
        valeurDivProgressManaEnnemi = 100;
    }

    healthbarjoueur.style.width = valeurDivProgressHealthJoueur + "%";
    manabarjoueur.style.width = valeurDivProgressManaJoueur + "%";

    healthbarennemi.style.width = valeurDivProgressHealthEnnemi + "%";
    manabarennemi.style.width = valeurDivProgressManaEnnemi + "%";
}
const avertirjoueurdangerTemps = (temps) => {
    danger_alert.style.zIndex = 0;
    danger_alert.classList.add("animation");

    switch (temps) {
        case 10:
            danger_alert.style.opacity = 0.3;
            break;
        case 9:
            danger_alert.style.opacity = 0.4;
            break;
        case 8:
            danger_alert.style.opacity = 0.5;
            break;
        case 7:
            danger_alert.style.opacity = 0.6;
            break;
        case 6:
            danger_alert.style.opacity = 0.7;
            break;
        case 5:
            danger_alert.style.opacity = 0.8;
            break;
        case 4:
            danger_alert.style.opacity = 0.9;
            break;
        case 3:
            danger_alert.style.opacity = 1;
            danger_alert.classList.remove("animation");
            danger_alert.classList.add("animation-extra-danger");
            break;
        default:
            danger_alert.style.opacity = 0;
            break;
    }
};
