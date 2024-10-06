window.addEventListener("load", () => {
    // Démarre le changement d'image
    changerImageLogin();

    let buttonSubmit = document.querySelector("#submit");

    buttonSubmit.addEventListener("click", () =>{
        createConnectionForm();
        
    })

})

const images = [
    '/Images/maliketh.jpg',
    '/Images/malenia.jpg',
    '/Images/messmer.jpg',
    '/Images/rellana.jpg'
];

let imageIndex = 0;

const changerImageLogin = () => {
    
    const imgElement = document.getElementById("slideIMG");

    imgElement.style.backgroundImage = `url(${images[imageIndex]})`;

    imageIndex++;

    if (imageIndex >= images.length) {
        
        imageIndex = 0;
    }

    setTimeout(changerImageLogin, 3000);
};

const createConnectionForm = () => {
    let form = new FormData();

    let user = document.querySelector("#username").value;
    let psw = document.querySelector("#password").value;

    form.append("username", user);
    form.append("password", psw);

    fetch("AjaxLogin.php", {
        method: "POST",
        body: form
    })
    .then(response => response.json())
    .then(data => {
        
        
        
        if (data.error) {
            let userdivnotexist = document.querySelector(".user-not-exist");
            userdivnotexist.style.display = "grid";
            animateLock(userdivnotexist);
        } else {
            window.location.href = "menu.php";
            console.log(data.result.key);   
        }
    });
}

const animateLock = (userdivnotexist) => {
    let y = 0;
    let opacity = 1;

    const tick = () => {
        if (y < 250) {
            y += 1;
            opacity -= 0.004;  
            userdivnotexist.style.transform = "translateY(" + y + "px)";
            userdivnotexist.style.opacity = opacity;
            window.requestAnimationFrame(tick);
        }
    }

    tick();
}