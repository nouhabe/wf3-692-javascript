window.onload = function(){
    var maBalise = document.querySelector('body');
    

    var monElementHtml = function(element){
       
        var elHtml = document.createElement(element);
        // console.log('createDivElement: ', elHtml);
        return elHtml;
   }

   var monH1 = monElementHtml('h1');
   monH1.innerText= "bienvenue dans ma page !!!";
   maBalise.appendChild(monH1);
   
   var divNom = monElementHtml('div');
   divNom.setAttribute('class', 'square');
   var monNom = monElementHtml('p');
   monNom.setAttribute('class', 'paragraph1');
   maBalise.appendChild(divNom);
   divNom.appendChild(monNom);
   monNom.innerText = "Bettaieb Nouha";

var balises = ["p","div","span","section"];
function plusieuresBalise (balises){
    for(var elementTagName of balises){
        var elementHtml = monElementHtml(elementTagName);
        maBalise.appendChild(elementHtml);
    }
 }
plusieuresBalise(balises);

function childElementParagraphe(balises){
    for(var elementTagName of balises){
        var childP = monElementHtml ("p"); 
        var parent = document.querySelector(elementTagName);
        parent.appendChild(childP); 
        console.log(parent);  
    }
}

childElementParagraphe(balises);

function createElement3 (arrayOfParagraphe){
    for(i=0 ; i< arrayOfParagraphe.length ; i++){
        var createDiv = monElementHtml ("div") ; 
        var createEnfant = monElementHtml ("p");
        createDiv.setAttribute('id', 'div'+(i+1));
        createDiv.setAttribute('class', 'square');
        createDiv.setAttribute('class','square color'+(i+1));
        createEnfant.setAttribute('class', 'paragraphe'+(i+1));
        createEnfant.innerText = arrayOfParagraphe[i];
        console.log(createDiv);
    }
}
createElement3(["maparagraphe numéro 1", "maparagraphe numéro 2", "maparagraphe numéro 3", "maparagraphe numéro 4"]);














}



