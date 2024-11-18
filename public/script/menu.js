const iframe = document.querySelector(".iframe-container");


let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");
let dashboard = document.querySelector("#dashboard");

window.addEventListener("load", () => {
    
   
   
    openTheChat();
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
    let openedchat = false;
    const openchat = document.querySelector("#openchat");
    const iframecontainer = document.querySelector(".iframe-container");
      
    openchat.addEventListener("click", () => {
     
        if (!openedchat) {
            iframecontainer.style.display = "flex";
            console.log(3432423);
            
            openedchat = true;
        } else {
            iframecontainer.style.display = "none";
            openedchat = false;
        }
    });
};
