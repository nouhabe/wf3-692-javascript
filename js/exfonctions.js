window.onload = function(){
    

    var monElementHtml = function(element){
       
        var elHtml = document.createElement(element);
        // console.log('createDivElement: ', elHtml);
        return elHtml;
   }

   var monH1 = monElementHtml('h1')
   var maBalise = document.querySelector('body');
   maBalise.appendChild(monH1);
   
   monH1.innerText= "bienvenue dans ma page !!!";
   var divNom = monElementHtml('div');
   divNom.setAttribute('class', 'square');
   var monNom = monElementHtml('p');
   monNom.setAttribute('class', 'paragraph1');
   maBalise.appendChild(divNom);
   divNom.appendChild(monNom);
   monNom.innerText = "Bettaieb Nouha";

var balises = ["p","div","span","section"];
function plusieuresBalise (balises){
 for( i=0 ; i< balises.length; i++){
    var elementHtml = monElementHtml(balises[i]); 
    maBalise.appendChild(elementHtml);   
      
            
     }   
 }
   plusieuresBalise(balises);



function childElement(balises){
    for( i=0 ; i<balises.length ; i++){
        var enfantP = monElementHtml ("p") ; 
        
        var child = document.querySelector(balises[i]);
        child.appendChild(enfantP); 
        console.log(child);   
    }
}

childElement(balises);

function createElement3 (){
    for(i=0 ; i<3 ; i++){
        var createDiv = monElementHtml ("div") ; 
        var createEnfant = monElementHtml ("p")
        createDiv.setAttribute('id', 'div'+(i+1));
        createDiv.setAttribute('class', 'square');
        createDiv.setAttribute('class','square color'+(i+1));
        maBalise.appendChild(createDiv);
        createDiv.appendChild(createEnfant);
        createEnfant.setAttribute('class', 'paragraphe'+(i+1));
        createEnfant.innerText ="maparagraphe numéro"+(i+1)
        console.log(createDiv);
    }
}
createElement3();














}



