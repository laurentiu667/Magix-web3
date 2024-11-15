const iframe = document.querySelector("#iframe");


let themebutton = document.querySelector("#theme");
let themecontainer = document.querySelector(".container-theme");
let dashboard = document.querySelector("#dashboard");

window.addEventListener("load", () => {
    
    if (iframe) {
        applyStyles(iframe);
    }
   
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
            iframecontainer.style.display = "block";
            console.log(3432423);
            
            openedchat = true;
        } else {
            iframecontainer.style.display = "none";
            openedchat = false;
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
            height : "100%",
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