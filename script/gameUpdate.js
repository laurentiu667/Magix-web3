let board_joueur = document.querySelector(".board_joueur");
let board_ennemi = document.querySelector(".board_ennemi");

let joueur_vie = document.querySelector("#joueur-vie");
let joueur_mana = document.querySelector("#joueur-mana");
let ennemi_vie = document.querySelector("#ennemi-vie");
let ennemi_mana = document.querySelector("#ennemi-mana");


let waiting = document.querySelector(".waiting");
let temps = document.querySelector(".temps");
let deck_container = document.querySelector(".deck-container");

let enneminom = document.querySelector(".nom-ennemi");
import { Cards } from "./cards.js";


let imagesMap = {}; // hashmap => uid => randomIMG

export const gameUpdate = (data) => {


    if (data === "WAITING") {
        waiting.style.display = "grid";
        waiting.innerHTML = "en attente";
    } else if (data === "LAST_GAME_WON") {
        waiting.style.display = "grid";
        waiting.innerHTML = "gagner mgl";
    } else if (data === "LAST_GAME_LOST") {
        waiting.style.display = "grid";
        waiting.innerHTML = "t trop nul";
    } else {
        waiting.style.display = "none";
        
        console.log(data);
        

        // METTRE A JOUR LES INFOS DU JOUEUR
        joueur_vie.innerHTML = data.hp;
        joueur_mana.innerHTML = data.mp;
        ennemi_vie.innerHTML = data.opponent.hp;
        ennemi_mana.innerHTML = data.opponent.mp;
        temps.innerHTML = data.remainingTurnTime;
        enneminom.innerHTML = data.opponent.username;

       
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

    }
};

