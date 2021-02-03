window.onload = function(){

    var body = document.querySelector('body');
    var conteneur =document.createElement('div');
    conteneur.setAttribute('class', 'container');
    body.appendChild(conteneur);
    var numberOfCard = 25;
    for(i=0 ; i < numberOfCard ; i++){
        let card =document.createElement('div');
        card.setAttribute('class', 'carte');
        conteneur.appendChild(card);
        card.addEventListener('click' , function(e){
            alert ("la Div est bien cliquable");
            console.log(element);}
        )
    }


































}