let iframe = document.querySelector(".iframe-container");


let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");
let dashboard = document.querySelector("#dashboard");
let fermetchat = document.querySelector(".fermer-chat");
let ouvrirchat = document.querySelector("#openchat");
window.addEventListener("load", () => {
    
   
   
    ouvrirchat.addEventListener("click", () => {
        openTheChat();
    });
    fermetchat.addEventListener("click", () => {
        fermerlechat();
    });

    theme();
    choisirTheme();

    dashboard.addEventListener("click", () => {
        window.location.href = "dashboard.php";
    });

});

const choisirTheme = () => {    

    Array.from(themecontainer.children).forEach(element => { // Utilise `children` pour n'obtenir que les éléments enfants
        element.addEventListener("click", () => {
            // conserver dans localstorage
            localStorage.setItem("theme", element.id);
            themecontainer.style.display = "none";

        });
    });
}

const theme = () => {
    let clicked = false;
    themebutton.addEventListener("click", () => {
        if (!clicked) {
            themecontainer.style.display = "grid";
            clicked = true;
        } else {    
            themecontainer.style.display = "none";
            clicked = false;
        }
    });
}


const openTheChat = () => {
    iframe.style.display = "block";
};

const fermerlechat = () => {
  
    
    iframe.style.display = "none";
}