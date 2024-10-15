window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mousedown", (event) => {
            movecard(card, event);
        });
    });


    let waiting = document.querySelector(".waiting");
    fetch("CallAjaxGame.php")
        .then(response => response.json())
        .then(data => {
        
            
            if (data.gamestate = "WAITING"){
                console.log("En attente de joueurs");
                console.log(data);
                waiting.style.display = "grid";


                // creer les div des cartes et leur attribuer la valeure de la carte etc etc etce tce tce
            } else {
                console.log("La partie a commencé");
                console.log(data);
                waiting.style.display = "none";
                
                
            }
        })
        .catch(error => console.error("Erreur lors de la récupération des données :", error));
});

const movecard = (card, initialEvent) => {
    initialEvent.preventDefault();

    const mouseMoveHandler = (event) => {
        const newX = event.clientX;
        const newY = event.clientY;
        card.style.position = "absolute";
        card.style.left = newX + "px";
        card.style.top = newY + "px";
        card.style.transform = "none";
    };

    const mouseUpHandler = () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
        window.removeEventListener("mouseup", mouseUpHandler);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);
};
