let buttonSubmit = document.querySelector("#submit");
window.addEventListener("load", () => {




    buttonSubmit.addEventListener("click", () => {
        createConnectionForm();
        
    })

})

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
        

        if (data === "INVALID_USERNAME_PASSWORD") {
            let userdivnotexist = document.querySelector(".user-not-exist");
            userdivnotexist.style.display = "grid";
            animateLock(userdivnotexist);
        } else {
            window.location.href = "menu.php";
            console.log(data.key);   
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