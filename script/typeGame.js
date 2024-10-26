window.addEventListener("load", () => {
   
    
    fetch("AjaxTypeGame.php")
        .then(response => response.json())
        .then(data => {
         
            console.log( "type de game" + data);
        })
        .catch(error => console.error("Erreur lors de la récupération des données :", error));
});

