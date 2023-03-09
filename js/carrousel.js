(function() {
    //debut 
console.log('carrousel.js');
let bouton__ouvrir = document.querySelector('.bouton__ouvrir');
let elmCarrousel = document.querySelector('.carrousel');
let elmBouton__x = document.querySelector('.bouton__x');
console.log(bouton__ouvrir.tagName);
// on va faire une fonction flechee
bouton__ouvrir.addEventListener('mouseDown', () => {
    console.log('boite modal ');
    elmCarrousel.classList.add('carrousel--ouvert');
    });
elmBouton__x.addEventListener('mouseDown', () => {
    console.log('boite modal ');
    elmCarrousel.classList.remove('carrousel--ouvert');
    });
})()
//fin