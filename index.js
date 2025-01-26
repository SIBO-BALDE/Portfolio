// Assurez-vous d'inclure la bibliothèque Typewriter avant d'utiliser ce code.

const textAnime = document.querySelector('.animationBalise');

const typewriter = new Typewriter(textAnime, {
    loop: true, 
});

typewriter.typeString("Full Stack web developer")
    .pauseFor(300)
    .deleteAll() // Supprime le texte actuel
    // .typeString("Nouveau texte à animer")
    .pauseFor(300)
    .start();



    
