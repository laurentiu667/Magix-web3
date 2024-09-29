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

// Démarre le changement d'image
changerImageLogin();