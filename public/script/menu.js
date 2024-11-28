let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");
let dashboard = document.querySelector("#dashboard");
let nom_joueur = document.querySelector(".nom-joueur");

window.addEventListener("load", () => {

    nom_joueur.innerHTML = "bienvenue " + localStorage.getItem("username");
    
    theme();
    choisirTheme();

    dashboard.addEventListener("click", () => {
        window.location.href = "dashboard.php";
    });

});

const choisirTheme = () => {    

    Array.from(themecontainer.children).forEach(element => {
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
            themecontainer.style.display = "flex";
            clicked = true;
        } else {    
            themecontainer.style.display = "none";
            clicked = false;
        }
    });
}

