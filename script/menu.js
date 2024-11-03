const iframe = document.querySelector("#iframe");

const rideau = document.querySelector(".rideau");
let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");

window.addEventListener("load", () => {
  
    rideau.classList.toggle('active');
    
    commencerAudioMenu();
    
    if (iframe) {
        applyStyles(iframe);
    }

  
   
    hoverMenuList();

    openTheChat();
    theme();
    choisirTheme();

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

const hoverMenuList = () => {
    const listItems = document.querySelectorAll('.list-menu ul li');
    const soundhover = new Audio('/Audio/hover-effect.mp3'); 

    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            soundhover.currentTime = 0;
            soundhover.volume = 0.5;
            soundhover.play().catch(error => {
                console.error("Erreur lors de la lecture de l'audio :", error);
            });
        });
    });
};

const openTheChat = () => {
    let openedchat = false;
    const openchat = document.querySelector("#openchat");
    const iframecontainer = document.querySelector(".iframe-container");
      
    openchat.addEventListener("click", () => {
     
        if (!openedchat) {
            iframecontainer.style.display = "block";
            console.log(3432423);
            
            openedchat = true;
        } else {
            iframecontainer.style.display = "none";
            openedchat = false;
        }
    });
};

const commencerAudioMenu = () => {
    const audio = document.querySelector(".audio-off-on");
    const menuaudio = new Audio('/Audio/audio_menu.mp3');

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

const applyStyles = iframe => {
    let styles = {
            fontColor : "white",
            backgroundColor : "transparent",
            fontGoogleName : "Poppins",
            fontSize : "20px",
            hideIcons : false,
            inputBackgroundColor : "transparent",
            inputFontColor : "black",
            height : "700px",
            padding: "5px",
            memberListFontColor : "black",
            borderColor : "black",
            memberListBackgroundColor : "white",
            hideScrollBar: true, // pour cacher le scroll bar
        }
        
        setTimeout(() => {
            iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
    }, 100);

};