let frame_container = document.querySelector(".iframe-container");
let message__class_global = document.querySelector(".message--class-global");
let chatForm = document.querySelector(".chat-form");
let messageInput = document.querySelector(".message--class-input");
let left_container_user_connected = document.querySelector(".left-container-user-connected");

let lastMessageId = 0; // pas prendre son message qui bug le -1 


let user_connected_array_old = [];
let user_connected_array_new = [];

window.addEventListener("load", () => {
    stateMessage(); 


    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = messageInput.value;
        if (message.length > 0) {
            sendMessage(message);
            messageInput.value = "";
        }
    });
    
});

const stateMessage = () => {
    fetch("AjaxChat.php", {   
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        let msgs = data.messages.msgs;
        let userConnected = data.messages.connectedUsers;


        /////////////////////////////////////////////////////////////////////////////////////////////////////
        // Parcourir les anciens utilisateurs et identifier ceux qui doivent être supprimés
        user_connected_array_old.forEach(oldUser => {
            if (!userConnected.some(newUser => newUser.username === oldUser)) {
                // en gros on prends l index du newUser et on le compare avec l index du old array
                // si le nom n est pas pareille alors prendre olduser et le supprimer
                const userDiv = document.querySelector(`.user-connected-div[data-username="${oldUser}"]`);
                if (userDiv) {
                    userDiv.remove(); // Supprimer le div correspondant
                }
            }
        });

        // Ajouter les nouveaux utilisateurs connectés qui n'existent pas encore
        userConnected.forEach(user => {
            if (!user_connected_array_old.includes(user.username)) {
                user_connected_array_old.push(user.username); // Ajouter à la liste

                // Ajouter à l'affichage
                let user_connected_div = document.createElement("div");
                user_connected_div.classList.add("user-connected-div");
                user_connected_div.setAttribute("data-username", user.username); // Assigner un attribut unique
                user_connected_div.innerText = user.username;
                left_container_user_connected.appendChild(user_connected_div);
            }
        });
        // Mettre à jour la liste des anciens utilisateurs connectés
        user_connected_array_old = userConnected.map(user => user.username);
        /////////////////////////////////////////////////////////////////////////////////////////////////////


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




// Fonction pour envoyer un message
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

