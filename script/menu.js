window.addEventListener("load", () => {
    applyStyles(document.querySelector("#iframe"));
	
	let commencer_partie = document.querySelector("#partie_lancer");

	commencer_partie.addEventListener("click", () => {
		console.log(234);
		window.location.href = "arenaProto.php";
	})

});


const applyStyles = iframe => {
	let styles = {
		fontColor : "red",
		backgroundColor : "transparent",
		fontGoogleName : "Poppins",
		fontSize : "20px",
		hideIcons : false,
		inputBackgroundColor : "transparent",
		inputFontColor : "black",
		height : "700px",
		padding: "0px",
		memberListFontColor : "red",
		borderColor : "none",
		memberListBackgroundColor : "blue",
		hideScrollBar: true, // pour cacher le scroll bar
	}
	
        setTimeout(() => {
            iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
    }, 100);
}


