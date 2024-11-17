
let endturn = document.querySelector(".img-div-button-game-endturn");
let hero = document.querySelector(".img-div-button-game-hero");
let surrender = document.querySelector(".img-div-button-game-forfeit");
let deck_container = document.querySelector(".hand-bottom-game"); 
let board_joueur = document.querySelector(".board-joueur");
let board_ennemi = document.querySelector(".board-ennemi");
let left_game = document.querySelector(".left-game");
let right_game = document.querySelector(".right-game");

let animation_rideau = document.querySelector(".animation-rideau");
let animationError = document.querySelector(".animationError");


let nom_joueur_animation = document.querySelector(".animation-joueur");
let nom_ennemi_animation = document.querySelector(".animation-ennemi");
let animation_versus_text = document.querySelector(".animation-versus-text");
let animation_versus_div = document.querySelector(".animation-versus");

let ennemi_card_board_count = document.querySelector(".ennemi-card-board-count"); 
let username_player = document.querySelector(".name-player"); 
let container_game = document.querySelector(".container-game");
import { gameUpdate } from "./gameUpdate.js";

let animationUnefois = false;

let jeux_en_cours = true;

export let jeux_peut_commencer = false;

import { afficher_tour_joueur_ou_erreur } from "./gameUpdate.js";

window.addEventListener("load", () => {
    let background = localStorage.getItem("theme");
    container_game.style.backgroundImage = `url(Images/${background}.gif)`;

    endturn.addEventListener("click", () => {endTurn()});

    hero.addEventListener("click", () => { heroPower()});

    surrender.addEventListener("click", () => {surrenderGame()});

    if(jeux_en_cours == true){
        setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
    } 

});

const state = () => {
    fetch("AjaxGame.php", {   
        method: "POST"    
    })
    .then(response => response.json())
    .then(data => {
        if(data === "WAITING"){
            animationTrouverAdversaire();
          
        } else if (data === "LAST_GAME_WON" || data === "LAST_GAME_LOST"){
            enleverAnimationBoard(data);
        }
        else {
            ajouterAnimationBoard(data);

            
            if(jeux_en_cours == true){
                gameUpdate(data);
            } 
          
        } 
        if(jeux_en_cours == true){
            setTimeout(state, 1000);
        } 
      
    })
    .catch(error => {
        console.error("Erreur lors de la récupération de l'état:", error);
        if(jeux_en_cours == true){
            setTimeout(state, 1000);
        } 
      
    });
};



const endTurn = () => {
    fetch("AjaxEndTurn.php", {})
    .then(response => response.json())
    .then(data => {
        if(jeux_en_cours == true){
            gameUpdate(data);
        } 
        
    });
}

const heroPower = () => {
    fetch("AjaxHeropower.php", {})
    .then(response => response.json())
    .then(data => {
        if(data == "HERO_POWER_ALREADY_USED"){
            afficher_tour_joueur_ou_erreur("Pouvoir déjà utilisé", "#D43232");
        } 
        else if (data == "NOT_ENOUGH_ENERGY"){
            afficher_tour_joueur_ou_erreur("Pas assez d'énergie", "#D43232");
        }
        else {
            if(jeux_en_cours == true){
                gameUpdate(data);
            } 
        }
        
        
    });
}
const surrenderGame = () => {
    fetch("AjaxSurrender.php", {})
    .then(response => response.json())
    .then(data => {
        if(jeux_en_cours == true){
            gameUpdate(data);
        } 
    
    });
}

const animationTrouverAdversaire = () => {
   
    animation_rideau.classList.add("animation");
  
}
const enleverAnimationBoard = (data) => {
    jeux_en_cours = false;
    setTimeout(() => {

        deck_container.classList.remove("animation");
        ennemi_card_board_count.classList.remove("animation");
       
    }, 500);

    setTimeout(() => {
        left_game.classList.remove("animation");
        right_game.classList.remove("animation");

    }, 800);
    setTimeout(() => {
        board_ennemi.classList.remove("animation");
        board_joueur.classList.remove("animation");

    }, 1200);
    setTimeout(() => {
        animation_versus_div.style.display = "flex";
        nom_joueur_animation.classList.remove("animation");
        nom_ennemi_animation.classList.remove("animation");
        animation_versus_text.classList.remove("animation");

        
        nom_joueur_animation.classList.add("animation_engame");
        nom_ennemi_animation.classList.add("animation_engame");

        animation_versus_text.classList.add("animation_engame");

      
        if(data === "LAST_GAME_WON"){
            animation_versus_text.innerHTML = "gagné contre";
        } else {
            animation_versus_text.innerHTML = "perdu contre";
        }


        
      
    }, 1500);
    setTimeout(() => {
        window.location.href = "menu.php";
    }, 3500);
}

const ajouterAnimationBoard = (data) => {
  
    animation_rideau.style.display = "none";
        
    if(animationUnefois == false){
        //settimeout pour laisser le temps à la carte de se jouer
        nom_joueur_animation.classList.add("animation");
        nom_ennemi_animation.classList.add("animation");

        animation_versus_text.classList.add("animation");

        nom_ennemi_animation.innerHTML = data.opponent.username;
        animation_versus_text.innerHTML = "VS";
        nom_joueur_animation.innerHTML = username_player.innerHTML;
        setTimeout(() => {
            animation_versus_div.style.display = "none";
            deck_container.classList.add("animation");
            ennemi_card_board_count.classList.add("animation");
        }, 2300);

        setTimeout(() => {
            left_game.classList.add("animation");
            right_game.classList.add("animation");

            // pour dire dans gameUpdate que on peut mettre a jour les données quand le jeux a commencer apres l animation versus
            jeux_peut_commencer = true;
        }, 2800);
        setTimeout(() => {
            board_ennemi.classList.add("animation");
            board_joueur.classList.add("animation");

        }, 2200);
        
        animationUnefois = true;
    }
}