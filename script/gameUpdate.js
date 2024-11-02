let board_joueur = document.querySelector(".board-joueur");
let board_ennemi = document.querySelector(".board-ennemi");
let deck_container = document.querySelector(".hand-bottom-game"); 
let ennemi_card_board_count = document.querySelector(".ennemi-card-board-count"); 
// let temps = document.querySelector(".temps");

// let joueur_vie = document.querySelector("#joueur-vie");
// let joueur_mana = document.querySelector("#joueur-mana");
// let ennemi_vie = document.querySelector("#ennemi-vie");
// let ennemi_mana = document.querySelector("#ennemi-mana");




// let enneminom = document.querySelector(".nom-ennemi");
import { Cards } from "./cards.js";


let imagesMap = {}; // hashmap => uid => randomIMG

export const gameUpdate = (data) => {
  
    

    if (data === "WAITING") {
        console.log(data);
    } else if (data === "LAST_GAME_WON") {
        console.log(data);
    } else if (data === "LAST_GAME_LOST") {
        console.log(data);
    } else {

        
       
  
        

        // METTRE A JOUR LES INFOS DU JOUEUR
        // joueur_vie.innerHTML = data.hp;
        // joueur_mana.innerHTML = data.mp;
        // ennemi_vie.innerHTML = data.opponent.hp;
        // ennemi_mana.innerHTML = data.opponent.mp;
        // temps.innerHTML = data.remainingTurnTime;
        // enneminom.innerHTML = data.opponent.username;

    
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

