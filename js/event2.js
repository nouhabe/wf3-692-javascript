import {monElementHtml , maBalise } from './module-fonctions.js';
window.onload = function(){

// je défini mon objet magasins:
var magasins = new Object();
magasins.rayon1 = "produits laitiers" ;
magasins.rayon2 = "Legumes et fruits";
magasins.rayon3 = "Entretien";
magasins.rayon4 = "Loisirs";

var magasin = monElementHtml ("div") ;
magasin.setAttribute('class', 'magasin'); 
maBalise.appendChild(magasin);
console.log(magasin);

function rayonMagasin (magasins){
    for( var rayon in magasins){
        var rayonElement = monElementHtml ("div");     
        magasin.appendChild(rayonElement);
        rayonElement.setAttribute('class', 'rayon');
        rayonElement.innerText = magasins[rayon];        
        rayonElement.addEventListener('click' , function(e){
        alert ("Vous etes dans le rayon:"+magasins[rayon]);
        console.log(rayon);
        })
}

}



rayonMagasin(magasins);


















































































}