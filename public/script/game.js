let endturn = document.querySelector(".img-div-button-game-endturn");
let hero = document.querySelector(".img-div-button-game-hero");
let surrender = document.querySelector(".img-div-button-game-forfeit");
let deck_container = document.querySelector(".hand-bottom-game"); 
let board_joueur = document.querySelector(".board-joueur");
let board_ennemi = document.querySelector(".board-ennemi");
let left_game = document.querySelector(".left-game");
let right_game = document.querySelector(".right-game");

let animation_rideau = document.querySelector(".animation-rideau");
let nom_joueur_animation = document.querySelector(".animation-joueur");
let nom_ennemi_animation = document.querySelector(".animation-ennemi");
let animation_versus_text = document.querySelector(".animation-versus-text");
let animation_versus_div = document.querySelector(".animation-versus");

let ennemi_card_board_count = document.querySelector(".ennemi-card-board-count"); 
let username_player = document.querySelector(".name-player"); 
let container_game = document.querySelector(".container-game");

let container_button_game_side_gameChild = document.querySelectorAll(".container-button-game-side-game");
let container_button_game_side_game = document.querySelector(".container-button-game-side-game");

let image_subject_ennemi = document.querySelector(".image-subject-ennemi");
let image_subject = document.querySelector(".image-subject");


let animationUnefois = false;
let jeux_en_cours = true;

const randomimgjoueur = Math.floor(Math.random() * 26) + 1;
const randomimgjoueur2 = Math.floor(Math.random() * 26) + 1;

let url; 
let form = null; 
export let jeux_peut_commencer = false;

import { afficher_tour_joueur_ou_erreur, gameUpdate } from "./gameUpdate.js";
import { fermerlechat } from "./chat.js";

window.addEventListener("load", () => {
    

    localStorage.setItem("randomimgjoueur", randomimgjoueur);
    localStorage.setItem("randomimgjoueur2", randomimgjoueur2);
    ajouterbackGroundGame();

    endturn.addEventListener("click", () => {endTurn()});

    hero.addEventListener("click", () => { heroPower()});

    surrender.addEventListener("click", () => {surrenderGame()});

    // enlever les boutons si on observe
    if(localStorage.getItem("usernameObserve") != null){
        // get les childs 
        container_button_game_side_gameChild.forEach(element => {
            element.style.display = "none";
        });
        container_button_game_side_game.style.display = "flex";
        container_button_game_side_game.innerHTML = "Observation";
    }
   
    initialiserGameouObserve();
    appliqueruneimageaujoueur();
    
    if(jeux_en_cours == true){
        setTimeout(state, 1000); 
    } 

});
const appliqueruneimageaujoueur = () => {

    
    image_subject.style.backgroundImage = `url(Images/cartes/image-${localStorage.getItem("randomimgjoueur")}.jpg)`;
    image_subject_ennemi.style.backgroundImage = `url(Images/cartes/image-${localStorage.getItem("randomimgjoueur2")}.jpg)`;
}

const ajouterbackGroundGame = () => {
    let background = localStorage.getItem("theme");
    if (background == null){
        // mettre un theme par defaut
        container_game.style.backgroundImage = `url(Images/bg3.gif)`;
    } else {
        // sinon mettre le theme choisi
        container_game.style.backgroundImage = `url(Images/${background}.gif)`;
    }
}

const initialiserGameouObserve = () => {
    if (localStorage.getItem("usernameObserve") != null) {
        if (url !== "AjaxObserve.php") { 
            form = new FormData();
            form.append("usernameObserve", localStorage.getItem("usernameObserve"));
            form.append("isObserving", true);
            url = "AjaxObserve.php";
        }
    } else {
        if (url !== "AjaxGame.php") { 
            form = null; 

            url = "AjaxGame.php";
        }
    }
};

const state = () => {
    fetch(url, {
        method: "POST",
        body: form,
    })
        .then(response => response.json())
        .then(data => {
            
            
            if (data === "WAITING") {
                // Partie en attente
            } else if (data === "LAST_GAME_WON" || data === "LAST_GAME_LOST") {
                localStorage.removeItem("usernameObserve");
                enleverAnimationBoard(data);
                fermerlechat();
            } else if (data === "NOT_IN_GAME") {
                localStorage.removeItem("usernameObserve");
                enleverAnimationBoard(data);
                fermerlechat();
            } else {
                ajouterAnimationBoard(data);
                
                if (jeux_en_cours) {
                    gameUpdate(data);
                }
            }

            if (jeux_en_cours) {
                setTimeout(state, 1000);
            }
        })
        
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
    let pouvoirused = false;
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

    if (localStorage.getItem("usernameObserve") != null) {
        username_player.innerHTML = localStorage.getItem("usernameObserve");
      
    } else {
        username_player.innerHTML = localStorage.getItem("username");
    }
    animation_rideau.classList.add("animation");

    setTimeout(() => {
        animation_rideau.remove();

    }, 500);


        
    if(animationUnefois == false){
        //settimeout pour laisser le temps à la carte de se jouer
        nom_joueur_animation.classList.add("animation");
        nom_ennemi_animation.classList.add("animation");

        animation_versus_text.classList.add("animation");

        nom_ennemi_animation.innerHTML = data.opponent.username;
        animation_versus_text.innerHTML = "VS";

        // sinon prendre getitem usernameObserve
        if (localStorage.getItem("usernameObserve") != null) {
            nom_joueur_animation.innerHTML = localStorage.getItem("usernameObserve");
          
        } else {
            nom_joueur_animation.innerHTML = localStorage.getItem("username");
        }
        setTimeout(() => {
            animation_versus_div.style.display = "none";
            deck_container.classList.add("animation");
            ennemi_card_board_count.classList.add("animation");
        }, 2300);

        setTimeout(() => {
            left_game.classList.add("animation");
            right_game.classList.add("animation");

         
            jeux_peut_commencer = true;
        }, 2800);
        setTimeout(() => {
            board_ennemi.classList.add("animation");
            board_joueur.classList.add("animation");

        }, 2200);
        
        animationUnefois = true;
    }
}