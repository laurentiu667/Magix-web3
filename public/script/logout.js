window.addEventListener("load", () => {
    let buttonlogout = document.querySelector("#deconnexion");
        buttonlogout.addEventListener("click", () => {
        window.location.href = "index.php";
        console.log("deconnexion");

        fetch("AjaxLogout.php", {})
        .then(response => response.json())
        .then(data => {
            
            
            if (data.error) {
                console.log("erreur de connection l utilisateur existe pas");
            
            } else {
                console.log(data.message);
            }
            
        })
    
    })
});