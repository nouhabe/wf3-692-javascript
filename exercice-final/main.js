import { random } from './functions.js' ;
window.onload = function(){

    var body = document.querySelector('body');
    var conteneur =document.createElement('div');
    conteneur.setAttribute('class', 'container');
    body.appendChild(conteneur);
    var couleur =['FFFFFF','FF0000','0000FF','008000','FFFF00','000000'];

    var valeur = ['roi','valée','dame','joker',1,2,3,4,5,6,7,8,9,10];  
    var typeCard =['pique','trèfle','coeur','carreau']
 var numberOfCard = 52;

 function createCrads(numberOfCard){
     
    for( var i=0 ; i < numberOfCard ; i++){
        let card = document.createElement('img');
        card.src = 'https://via.placeholder.com/150.png?text=Mistery+card';
        card.setAttribute('class', 'carte');
        // card.setAttribute('id', i);
        conteneur.appendChild(card);
        const cal = random(couleur);
        const txt = random(valeur);
        const type = random(typeCard);
        card.addEventListener('click', function(e){
            if(card.cliked == false){
                card.src = 'https://via.placeholder.com/150.png/' + cal +'/F726E0/?text='+ txt+' '+type;
                card.cliked = true ;
            } else {
                card.src = 'https://via.placeholder.com/150.png?text=Mistery+card';
                card.cliked = false ;  
            }
        });
    }
 }
 createCrads(numberOfCard); 

   





























}