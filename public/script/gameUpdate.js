let board_joueur = document.querySelector(".container-hand-joueur");
let board_ennemi = document.querySelector(".container-hand-ennemi");
let deck_container = document.querySelector(".hand-bottom-game"); 
let ennemi_card_board_count = document.querySelector(".ennemi-card-board-count"); 

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
let afficher_tour = document.querySelector(".message-erreur--1");
let afficher_tour_message = document.querySelector(".style-div-erreur-before");
let message_erreur__1 = document.querySelector(".message-erreur--1");

const activeHeroButton = document.querySelector('.img-div-button-game-hero');
const attackHeroButton = document.querySelector('.img-div-button-game-attackhero');
const endTurnButton = document.querySelector('.img-div-button-game-endturn');
const forfeitButton = document.querySelector('.img-div-button-game-forfeit');

import { Cards } from "./cards.js";
import { jeux_peut_commencer } from "./game.js";

let imagesMap = {}; // hashmap => uid => randomIMG

let dernierTour = null; 
export const gameUpdate = (data) => {
    if (data === "WAITING") {
       
    } else if (data == "WRONG_TURN") {
        afficher_tour_joueur_ou_erreur("Ce n’est pas votre tour", "#D43232");
    }
    else {
        if(jeux_peut_commencer){
            mettreAjourEtatJoueur(data);

            jouerAnimationTour(data);
            
            mettreAJourTempsJoueur(data);
            
            mettreajourbardevieetmana(data.hp, data.mp, data.opponent.hp, data.opponent.mp, data.maxHp, data.maxMp, data.opponent.maxHp, data.opponent.maxMp);

            mettreAJourLesBoards(data);
            
            mettreajourherodisponible(data);
            mettreajourbuttonsgame(data)
        }
    }
};
const mettreajourherodisponible = (data) => {
    if (data.heroPowerAlreadyUsed) {
        activeHeroButton.classList.add("active");
    } else if (data.heroPowerAlreadyUsed === false) {
        activeHeroButton.classList.remove("active");
        
    } 
}
const mettreajourbuttonsgame = (data) => {
    if(!data.yourTurn){
        attackHeroButton.classList.add("active");
        endTurnButton.classList.add("active");
        forfeitButton.classList.add("active");
        activeHeroButton.classList.add("active");
    } else {
        attackHeroButton.classList.remove("active");
        endTurnButton.classList.remove("active");
        forfeitButton.classList.remove("active");

    }
}
const mettreajourbardevieetmana = (healthjoueur, manajoueur, healthennemi, manaennemi, maxhealth, maxmana, maxhopponent, maxmopponent) => {

    let valeurDivProgressHealthJoueur = (healthjoueur / maxhealth) * 100; 
    let valeurDivProgressManaJoueur = (manajoueur / maxmana) * 100;
    
    let valeurDivProgressHealthEnnemi = (healthennemi / maxhopponent) * 100; 
    let valeurDivProgressManaEnnemi = (manaennemi / maxmopponent) * 100;

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

    if (temps <= 10){
        danger_alert.classList.add("animation-extra-danger");
    } 
};

export const afficher_tour_joueur_ou_erreur = (texte, couleurediv) => {
  
    afficher_tour.classList.add("active-animation");
    afficher_tour_message.innerHTML = texte;
    afficher_tour_message.style.backgroundColor = couleurediv;
    message_erreur__1.style.border = `2px solid ${couleurediv}`;
    setTimeout(() => {
        afficher_tour.classList.remove("active-animation");
    }, 3950);
}
const mettreAjourEtatJoueur = (data) => {
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
}

const jouerAnimationTour = (data) => {

    if (data.yourTurn !== dernierTour) {
        dernierTour = data.yourTurn;

        if (data.yourTurn) {
            afficher_tour_joueur_ou_erreur("votre tour", "#3278D4");
        } else {
            afficher_tour_joueur_ou_erreur("tour de l’adversaire", "#D43232" );
        }
    }
}

const mettreAJourTempsJoueur = (data) => {
    if (data.yourTurn) {

           
        avertirjoueurdangerTemps(data.remainingTurnTime);
        temps_restant_ennemi.innerHTML = "pas votre tour";
        temps_restant.innerHTML = data.remainingTurnTime;
    } else {
       
    
        danger_alert.classList.remove("animation-extra-danger");
        temps_restant_ennemi.innerHTML = data.remainingTurnTime;
        temps_restant.innerHTML = "pas votre tour";
    }
}

const mettreAJourLesBoards = (data) => {
    deck_container.innerHTML = ''; 
    data.hand.forEach(carte => {
        
        if (!imagesMap[carte.uid]) {
            imagesMap[carte.uid] = Math.floor(Math.random() * 26) + 1;
        }
        let randomIMG = imagesMap[carte.uid];
        let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "deck_container", randomIMG, carte.state, data.yourTurn);
    });
    board_joueur.innerHTML = '';
    data.board.forEach(carte => {
      
        if (!imagesMap[carte.uid]) {
            imagesMap[carte.uid] = Math.floor(Math.random() * 26) + 1;
        }
        let randomIMG = imagesMap[carte.uid];
        let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "board_joueur", randomIMG, carte.state, data.yourTurn);
    });

    board_ennemi.innerHTML = '';
    data.opponent.board.forEach(carte => {
        if (!imagesMap[carte.uid]) {
            imagesMap[carte.uid] = Math.floor(Math.random() * 26) + 1;
        }
        let randomIMG = imagesMap[carte.uid];
        let card = new Cards(carte.atk, carte.baseHP, carte.cost, carte.hp, carte.id, carte.mechanics, carte.uid, "board_ennemi", randomIMG, carte.state, data.yourTurn);
    });
    ennemi_card_board_count.innerHTML = '';
    for (let i = 0; i < data.opponent.handSize; i++) {
        let divCarteEnnemiCounter = document.createElement("div");
        divCarteEnnemiCounter.classList.add("carteEnnemiCount");
        ennemi_card_board_count.appendChild(divCarteEnnemiCounter);
    }
}