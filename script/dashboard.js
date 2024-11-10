let container_dash = document.querySelector(".container-dash");
window.addEventListener("load", () => {
   stateDashboard();
});

const stateDashboard = () => {
    
    fetch("AjaxDashboard.php", {   
        method: "POST"    
    })
    .then(response => response.json())
    .then(data => {
        
        data.forEach(element => {
            let div_stats = document.createElement("div");
            div_stats.classList.add("div-stats");
            console.log(element.ennemi__nom);
            

            container_dash.appendChild(div_stats);
            
        });
    
    });
}
