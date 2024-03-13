// Assurez-vous d'inclure la bibliothèque Typewriter avant d'utiliser ce code.

const textAnime = document.querySelector('.animationBalise');

const typewriter = new Typewriter(textAnime, {
    loop: true, // Si vous souhaitez que l'animation se répète
});

typewriter.typeString("Développeuse JavaScript FullStack")
    .pauseFor(300)
    .deleteAll() // Supprime le texte actuel
    // .typeString("Nouveau texte à animer")
    .pauseFor(300)
    .start();



    
