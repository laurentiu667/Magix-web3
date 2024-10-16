const iframe = document.querySelector("#iframe");
const sound = new Audio('Audio/hover-effect.mp3'); // Replace with your actual MP3 path
const listItems = document.querySelectorAll('.list-menu ul li');

const commencer_partie = document.querySelector("#partie_lancer");
const openchat = document.querySelector("#openchat");

window.addEventListener("load", () => {
    
    if (iframe) {
        applyStyles(iframe);
    }

    if (commencer_partie) {
        commencer_partie.addEventListener("click", () => {
        
            window.location.href = "game.php";
        });
    }

 

    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            sound.currentTime = 0; // Rewind to start
            sound.play(); // Play the sound
            console.log(4342);
        });
    });

    openchat.addEventListener("click", () =>{
        const iframecontainer = document.querySelector(".iframe-container");
        iframecontainer.style.display = "block";
   
        
    })
});

const applyStyles = iframe => {
    let styles = {
        fontColor: "white",
        backgroundColor: "transparent",
        fontGoogleName: "Poppins",
        fontSize: "20px",
        hideIcons: true,
        inputBackgroundColor: "transparent",
        inputFontColor: "black",
        height: "100%",
        padding: "0px",
        memberListFontColor: "white",
        borderColor: "black",
        memberListBackgroundColor: "black",
        hideScrollBar: true, // pour cacher le scroll bar
    };

    setTimeout(() => {
        iframe.contentWindow.postMessage(JSON.stringify(styles), "*");
    }, 100);
};