window.addEventListener("load", () => {
    let buttonlogout = document.querySelector("#deconnexion");
        buttonlogout.addEventListener("click", () => {
        window.location.href = "index.php";

        fetch("AjaxLogout.php", {})
        .then(response => response.json())
        .then(data => {
            
        })
    
    })
});