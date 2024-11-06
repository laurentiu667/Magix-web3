
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
let container_game = document.querySelector(".container-game");

let nom_joueur_animation = document.querySelector(".animation-joueur");
let nom_ennemi_animation = document.querySelector(".animation-ennemi");
let animation_versus_text = document.querySelector(".animation-versus-text");
let animation_versus_div = document.querySelector(".animation-versus");

let ennemi_card_board_count = document.querySelector(".ennemi-card-board-count"); 
let username_player = document.querySelector(".name-player"); 
import { gameUpdate } from "./gameUpdate.js";

import { animationMessageErreur } from "./cards.js";
let animationUnefois = false;
window.addEventListener("load", () => {
    endturn.addEventListener("click", () => {
        console.log("endturn");
        
        endTurn();
    });
    hero.addEventListener("click", () => {
        console.log("hero");
        
        heroPower();
    });
    surrender.addEventListener("click", () => {
        console.log("surrender");
        
        surrenderGame();
    });
    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

const state = () => {
    fetch("AjaxGame.php", {   
        method: "POST"    
    })
    .then(response => response.json())
    .then(data => {
        if(data === "WAITING"){
            animation_rideau.innerHTML = "En attente d'un adversaire";
         
          
      
        } else if (data === "LAST_GAME_WON" || data === "LAST_GAME_LOST"){
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
        else {

            animation_rideau.classList.add("animation");
    
            animation_rideau.style.display = "none";
          
            let background = localStorage.getItem("theme");
            container_game.style.backgroundImage = `url(Images/${background}.gif)`;
           
           
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

                }, 2800);
                setTimeout(() => {
                    board_ennemi.classList.add("animation");
                    board_joueur.classList.add("animation");

                }, 2200);
                
                animationUnefois = true;
            }
            gameUpdate(data);
        } 
       
        setTimeout(state, 1000);
    })
    .catch(error => {
        console.error("Erreur lors de la récupération de l'état:", error);
        setTimeout(state, 1000);
    });
};



const endTurn = () => {
    fetch("AjaxEndTurn.php", {})
    .then(response => response.json())
    .then(data => {
        gameUpdate(data);
        
    });
}

const heroPower = () => {
    fetch("AjaxHeropower.php", {})
    .then(response => response.json())
    .then(data => {
        if(data == "HERO_POWER_ALREADY_USED"){
            // animationMessageErreur("Pouvoir héroique déjà utilisé");
        } 
        else if (data == "NOT_ENOUGH_ENERGY"){
            // animationMessageErreur("Pas assez de mana");
        }
        else {
            gameUpdate(data);
        }
        
        
    });
}
const surrenderGame = () => {
    fetch("AjaxSurrender.php", {})
    .then(response => response.json())
    .then(data => {
        gameUpdate(data);
    
    });
}


