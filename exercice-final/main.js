window.onload = function(){

    var body = document.querySelector('body');
    var conteneur =document.createElement('div');
    conteneur.setAttribute('class', 'container');
    body.appendChild(conteneur);
    var numberOfCard = 25;


 
 var couleur =['FFFFFF','FF0000','0000FF','008000','FFFF00','000000']
//  var color = getArrayRandomElement(couleur);
 
function random(couleur) {
     return couleur[Math.floor(Math.random() * couleur.length)]
}
random(couleur);

    for(i=0 ; i < numberOfCard ; i++){
        let card = new Image();
        card.src = 'https://via.placeholder.com/150.png?text=Mistery+card';
        card.setAttribute('class', 'carte');
        conteneur.appendChild(card); 
        card.onclick = function(){
            card.src = 'https://via.placeholder.com/150.png/'+random(couleur)+'?text=Mistery+card';
               
        }  
    }

































}