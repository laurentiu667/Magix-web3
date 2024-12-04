let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");
let dashboard = document.querySelector("#dashboard");
let nom_joueur = document.querySelector(".nom-joueur");
let inputUserObserve = document.querySelector("#inputUserObserve");
let type_carte = document.querySelector(".type-carte");
let carteShow = document.querySelector("#cartes");
let clickedcarte = false;

window.addEventListener("load", () => {

    nom_joueur.innerHTML = "bienvenue " + localStorage.getItem("username");
    
    theme();
    choisirTheme();

    dashboard.addEventListener("click", () => {
        window.location.href = "dashboard.php";
    });

    inputUserObserve.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            getUsername();
            window.location.href = "game.php";
        }
    });
    carteShow.addEventListener("click", () => {
        legendeCarteShow();
    });
});
const choisirTheme = () => {    

    Array.from(themecontainer.children).forEach(element => {
        element.addEventListener("click", () => {
            localStorage.setItem("theme", element.id);
            themecontainer.style.display = "none";
        });
    });
}
const legendeCarteShow = () => {
    if (!clickedcarte) {
        type_carte.classList.add("show");
        clickedcarte = true;
    } else {
        type_carte.classList.remove("show");
        clickedcarte = false;
    }
};
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

const getUsername = () => {

    localStorage.setItem("usernameObserve", inputUserObserve.value);
}