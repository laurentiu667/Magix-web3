let buttonSubmit = document.querySelector("#submit");


window.addEventListener("load", () => {
  
    buttonSubmit.addEventListener("click", () => {
        createConnectionForm();
    });

    // pour faire en sorte de enter au lieu de cliquer sur le button
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            createConnectionForm();
        }
    });
});

const createConnectionForm = () => {
    let form = new FormData();

    let user = document.querySelector("#username").value;
    let psw = document.querySelector("#password").value;

    localStorage.setItem("username", user);

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
            userdivnotexist.classList.add("active");
            setTimeout(() => {
                userdivnotexist.classList.remove("active");
            }, 2000);
        } else {
            window.location.href = "menu.php";
        }
    })
    .catch(error => console.error("Erreur AJAX :", error));
};
