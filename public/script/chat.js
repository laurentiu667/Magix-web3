
let message__class_global = document.querySelector(".message--class-global");
let chatForm = document.querySelector(".chat-form");
let messageInput = document.querySelector(".message--class-input");
let list_user__in_game = document.querySelector(".list-user--in-game");
let lastMessageId = -1; // pas prendre son message qui bug le -1 
let ouvrirchat = document.querySelector(".open-chat-button");
let fermetchat = document.querySelector(".fermer-chat");
let iframe = document.querySelector(".iframe-container");
let user_connected_array_old = [];
let themecontainer = document.querySelector(".container-theme");

import { User } from "./user.js";

window.addEventListener("load", () => {
    stateMessage(); 


    ouvrirchat.addEventListener("click", () => {
        openTheChat();
        themecontainer.style.display = "none";
    });
    fermetchat.addEventListener("click", () => {
        fermerlechat();
    });

    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = messageInput.value;
        if (message.length > 0) {
            sendMessage(message);
            messageInput.value = "";
        }
    });
    
});

const openTheChat = () => {
    iframe.classList.add("active");
    iframe.style.zIndex = "5000";
    iframe.style.opacity = "1";
};

export const fermerlechat = () => {
  
    iframe.classList.remove("active");
    iframe.style.zIndex = "0";
    iframe.style.opacity = "0";
}
const stateMessage = () => {
    fetch("AjaxChat.php", {   
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        
        
        let msgs = data.messages.msgs;
        let userConnected = data.messages.connectedUsers;
        let games = data.messages.games;
        list_user__in_game.innerHTML = "";
        games.forEach(element => {
            createGamesViews(element);
            
        });
        
        user_connected_array_old.forEach(oldUser => {
            if (!userConnected.some(newUser => newUser.username === oldUser)) {
                // en gros on prends l index du newUser et on le compare avec l index du old array
                // si le nom n est pas pareille alors prendre olduser et le supprimer
                const userDiv = document.querySelector(`.user-connected-div[data-username="${oldUser}"]`);
                if (userDiv) {
                    userDiv.remove(); 
                }
            }
        });

        // Ajouter les nouveaux utilisateurs connectés qui n'existent pas encore
        userConnected.forEach(user => {
            if (!user_connected_array_old.includes(user.username)) {
                user_connected_array_old.push(user.username); // Ajouter à la liste

                let userClass = new User(user.username, user.trophies);
            }
        });
   
        user_connected_array_old = userConnected.map(user => user.username);
     


        msgs.forEach(element => {
            // si un nouveau id est plus grand que le dernier alors nouveau message
            if (element.id > lastMessageId) {
                lastMessageId = element.id;
                let user_mess_container = document.createElement("div");
                user_mess_container.classList.add("user-mess-container");

                let heure_user_container = document.createElement("div");
                heure_user_container.classList.add("heure-user");
                let firstspan = document.createElement("span");
                firstspan.innerText = "["
                // ici rentrer l heure du message
                let secondspan = document.createElement("span");
                secondspan.classList.add("heure-input");

                secondspan.innerText = element.time;
                let thirdspan = document.createElement("span");
                thirdspan.innerText = "]"
                heure_user_container.appendChild(firstspan);
                heure_user_container.appendChild(secondspan);
                heure_user_container.appendChild(thirdspan);

                let mess__user_real_time = document.createElement("div");
                mess__user_real_time.innerText = element.text;
                mess__user_real_time.classList.add("mess--user-real-time");

                let mess__user_username_real_time = document.createElement("div");
                mess__user_username_real_time.classList.add("mess--user-username-real-time");
                mess__user_username_real_time.innerText = element.fromUser;
                mess__user_real_time.appendChild(mess__user_username_real_time);

                if (element.fromUser === data.username) {
                    // ajouter une autre class a user_mess_container comme user-mess-container-reverse en plus de sa classe actuelle
                    user_mess_container.classList.add("user-mess-container-reverse");
                 

                }

                user_mess_container.appendChild(heure_user_container);
                user_mess_container.appendChild(mess__user_real_time);
                message__class_global.appendChild(user_mess_container);


                // scroll en bas automatiquement
                message__class_global.scrollTop = message__class_global.scrollHeight;

            


            }
        });
      
        setTimeout(stateMessage, 1000); 
    })
    
};




const createGamesViews = (games) => {
    let container_user_in_game = document.createElement("div");
    container_user_in_game.classList.add("container-user-in-game");

    let first_player_container = document.createElement("div");
    let second_player_container = document.createElement("div");
    first_player_container.classList.add("gb-fpc", "first-player-container");
    second_player_container.classList.add("gb-fpc", "second-player-container");
    

    let name_in_game = document.createElement("div");
    let health_in_game = document.createElement("div");
    name_in_game.classList.add("name-in-game"); 
    health_in_game.classList.add("health-in-game");

    let name_in_game_second = document.createElement("div");
    let health_in_game_second = document.createElement("div");

    name_in_game_second.classList.add("name-in-game");
    health_in_game_second.classList.add("health-in-game");

    name_in_game.innerText = games.p1;
    health_in_game.innerText = games.p1Hp;

    name_in_game_second.innerText = games.p2;
    health_in_game_second.innerText = games.p2Hp;



    first_player_container.appendChild(name_in_game);
    first_player_container.appendChild(health_in_game);

    second_player_container.appendChild(name_in_game_second);
    second_player_container.appendChild(health_in_game_second);

    container_user_in_game.appendChild(first_player_container);
    container_user_in_game.appendChild(second_player_container);
    
    list_user__in_game.appendChild(container_user_in_game);

}



// envoi d un message
const sendMessage = (message) => {
    let form = new FormData();
    form.append("message", message);
    fetch("AjaxChat.php", {
        method: "POST",
        body: form
    })
    .then(response => response.text())
    .then(result => {
        
    });
};


