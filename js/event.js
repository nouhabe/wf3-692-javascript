import {monElementHtml , maBalise } from './module-fonctions.js';


window.onload = function(){

    var divClick = document.querySelectorAll('.square');
    console.log(divClick);
    for (element of divClick){
        element.addEventListener('click' , function(e){
            alert ("la Div est bien cliquable");
            console.log(element);}
        )
    }  


    
function createElement3 (numberTags){
    for( var i=0 ; i<numberTags ; i++){
        var createDiv = monElementHtml ("div") ; 
        var createEnfant = monElementHtml ("p")
        createDiv.setAttribute('id', 'div'+(i+1));
        createDiv.setAttribute('class', 'square color1');
    
        maBalise.appendChild(createDiv);
        createDiv.appendChild(createEnfant);
        createEnfant.setAttribute('class', 'paragraphe'+(i+1));
        createEnfant.innerText ="Ma paragraphe numéro"+(i+1)
        console.log(createDiv);
        createDiv.addEventListener('click' , function(e){
            alert ("la Div est bien cliquable");
            console.log(createDiv);}
        )
        }
}
createElement3(4);






















}