window.addEventListener("load", () => {
   
    let waiting = document.querySelector(".waiting");
    fetch("AjaxTypeGame.php")
        .then(response => response.json())
        .then(data => {
         
            console.log(data);
            
    
            
            
        })
        .catch(error => console.error("Erreur lors de la récupération des données :", error));
});

