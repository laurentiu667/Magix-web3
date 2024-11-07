window.addEventListener("load", () => {
    let node = document.querySelector("input");

    node.onkeyup = e => {
        if (e.key == "Enter") {
            let formData = new FormData();
            formData.append("txt", node.value);

            fetch("ajax-process.php", {
                method: "post",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.querySelector("#match-picture").style.backgroundImage = "url('images/pictures/" + data.picture + "')";                
                document.querySelector("#match-name").innerText = data.name;
            })
        }
    }

})