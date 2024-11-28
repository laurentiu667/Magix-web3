
const entrainement = document.querySelector("#entrainement");
const partie_pvp = document.querySelector("#partie_lancer_pvp");

window.addEventListener("load", () => {
  
    if (entrainement) {
        entrainement.addEventListener("click", () => {
            localStorage.removeItem("usernameObserve");
            typeGame("TRAINING");
        });
    }

    if (partie_pvp) {
        partie_pvp.addEventListener("click", () => {
            let audio = new Audio('Audio/gamestart.mp3');
            audio.play();
            localStorage.removeItem("usernameObserve");
            typeGame("PVP");
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
    
    })
    
}
