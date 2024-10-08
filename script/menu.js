window.addEventListener("load"), () => {
    applyStyles(document.querySelector("iframe"));
}


const applyStyles = iframe => {
	let styles = {
		fontColor : "#333",
		backgroundColor : "#ff0000",
		fontGoogleName : "Sofia",
		fontSize : "20px",
		hideIcons : false,
		inputBackgroundColor : "red",
		inputFontColor : "transparent",
		height : "700px",
		padding: "0px",
		memberListFontColor : "#ff00dd",
		borderColor : "transparent",
		memberListBackgroundColor : "red",
		hideScrollBar: true, // pour cacher le scroll bar
	}
	
        setTimeout(() => {
            iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
    }, 100);
}
