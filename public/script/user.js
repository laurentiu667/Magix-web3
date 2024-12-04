let left_container_user_connected = document.querySelector(".left-container-user-connected");
export class User {
    constructor(username, trophies) {
        this.username = username,
        this.trophies = trophies
        this.creationUserDiv();
    }

    creationUserDiv(){
        let user_connected_div = document.createElement("div");
        user_connected_div.classList.add("user-connected-div");
        user_connected_div.setAttribute("data-username", this.username); 
        user_connected_div.innerText = this.username;
        left_container_user_connected.appendChild(user_connected_div);

        user_connected_div.addEventListener("mouseover", () => hoverInfoUserCreateDiv(user_connected_div, this.trophies));
        user_connected_div.addEventListener("mouseout", () => removeHoverInfoUserCreateDiv(user_connected_div));
        user_connected_div.addEventListener("click", () => clickUserDiv(user_connected_div, this.trophies));
    }
}
const hoverInfoUserCreateDiv = (divHovered, trophiesUserHovered) => {

    let container_trophies =  document.createElement("div");
    container_trophies.classList.add("container-trophies");
    container_trophies.innerText = trophiesUserHovered;
    divHovered.appendChild(container_trophies);


}
const clickUserDiv = (divClicked, trophiesUserHovered) => {
    let container_trophies =  document.createElement("div");
    container_trophies.classList.add("container-trophies");
    container_trophies.innerText = trophiesUserHovered;
    divClicked.appendChild(container_trophies);

    setTimeout(() => {
        divClicked.removeChild(container_trophies);
    }, 3000);
}


const removeHoverInfoUserCreateDiv = (divHovered) => {
    let container_trophies = divHovered.querySelector(".container-trophies");
    divHovered.removeChild(container_trophies);
}