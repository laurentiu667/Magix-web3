
window.addEventListener("load", () => {
    const entrainement = document.querySelector("#entrainement");
    const partie_pvp = document.querySelector("#partie_lancer_pvp");
   
    if (entrainement) {
        entrainement.addEventListener("click", () => { // Remplacement de "onclick" par "click"
          
            // ajouter audio
            let audio = new Audio('Audio/gamestart.mp3');
            audio.play();
            // delay de 1 seconde l appel de la fonction
            setTimeout(() => {
                typeGame("TRAINING");
            }, 500);
        });
    }

    if (partie_pvp) {
        partie_pvp.addEventListener("click", () => { // Remplacement de "onclick" par "click"
            let audio = new Audio('Audio/gamestart.mp3');
            audio.play();
            setTimeout(() => {
                typeGame("PVP");
            }, 500);
        });
    }
    
    
});

const typeGame = (namegame) => {
    let form = new FormData();
    form.append("typegame", namegame);

    fetch("AjaxTypeGame.php", {
        method: "POST",
        body: form
    })
    .then(response => response.json())
    .then(data => {
   
        window.location.href = "game.php";
        console.log("Type de game: " + data);
    })
    
}
