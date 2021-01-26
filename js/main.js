window.onload = function(){
    // avant
    var p = document.getElementsByTagName('p');
    var div = document.getElementsByTagName('div');
    var greenP = document.getElementById('green');
    var p1 = document.getElementsByClassName('p1');
    console.log(greenP, p1, p, div);
    // aujourd'hui
    var pwithquerySelectorByName =document.querySelector('p');
    var pWithQuerySelectorById = document.querySelector('#green');
    var pWithQuerySelectorByClassName =document.querySelector('.p1');
    console.log('pwithquerySelector: ',pwithquerySelectorByName);
    console.log('pWithQuerySelectorById:',pWithQuerySelectorById);
    console.log('pWithQuerySelectorByClassName:', pWithQuerySelectorByClassName);
   // Pour pouvoir récupérer plusieurs éléments avec querySelector
    // Il faut utiliser querySelectorAll()
    var getAllParagrapheWithQuerySelectorAll = document.querySelectorAll('p');
    console.log("getAllParagrapheWithQuerySelectorAll: ", getAllParagrapheWithQuerySelectorAll)
}