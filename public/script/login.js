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
            userdivnotexist.classList.add("active");
            setTimeout(() => {
                userdivnotexist.classList.remove("active");
            }, 2000);
       
        } else {
            window.location.href = "menu.php";
            console.log(data.key);   
        }
    });
}

