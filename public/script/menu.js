let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");
let container_menu = document.querySelector(".container-menu");
let dashboard = document.querySelector("#dashboard");
let nom_joueur = document.querySelector(".nom-joueur");
let inputUserObserve = document.querySelector("#inputUserObserve");
let type_carte = document.querySelector(".type-carte");
let carteShow = document.querySelector("#cartes");
let clickedcarte = false;
let clickedtheme = false;
window.addEventListener("load", () => {

    nom_joueur.innerHTML = "bienvenue " + localStorage.getItem("username");
    
    theme();
    choisirTheme();
    commencerAudioMenu();
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
            container_menu.style.backgroundImage = `url(Images/${localStorage.getItem("theme")}.gif)`;
            themecontainer.style.display = "none";
            clickedtheme = false;
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
 
    themebutton.addEventListener("click", () => {
        if (!clickedtheme) {
            themecontainer.style.display = "flex";
            clickedtheme = true;
        } else {    
            themecontainer.style.display = "none";
            clickedtheme = false;
        }
    });
}

const getUsername = () => {

    localStorage.setItem("usernameObserve", inputUserObserve.value);
}
const commencerAudioMenu = () => {
    const audio = document.querySelector(".audio-off-on");
    const menuaudio = new Audio('/audio/eldenost.mp3');

    let audio_on_off = false;
    
    audio.addEventListener("click", () => {
        if (!audio_on_off) {
            menuaudio.currentTime = 0; 
            menuaudio.volume = 0.3;   
            menuaudio.play();
            audio.classList.toggle('active');
            audio_on_off = true; 
        } else {
            audio.classList.toggle('active');
            menuaudio.pause(); 
            audio_on_off = false; 
        }
    });
};