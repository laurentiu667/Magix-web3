let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");
let dashboard = document.querySelector("#dashboard");
let nom_joueur = document.querySelector(".nom-joueur");
let inputUserObserve = document.querySelector("#inputUserObserve");
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

const getUsername = () => {

    localStorage.setItem("usernameObserve", inputUserObserve.value);
}