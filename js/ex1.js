// window.onload = function(){
//        // ancienne méthode
//     var div = document.getElementsByTagName('div');
//     var divCard = document.getElementById('card');
//     var divCardClasse = document.getElementsByClassName('card');
//     console.log(div,divCard,divCardClasse);
//     // Methode actuelle
//     var divWithQuerySelectorById = document.querySelector('#card');
//     var divWithQuerySelectorByClassName =document.querySelector('.card');
  
//     var getAllParagrapheWithQuerySelectorAll = document.querySelectorAll('p');
//     console.log(divWithQuerySelectorById);
//     console.log(divWithQuerySelectorByClassName);
//     console.log("getAllParagrapheWithQuerySelectorAll: ", getAllParagrapheWithQuerySelectorAll)

// }
// // Exercice2:
// var color=["red","blue","green","white","black","orange","tomato","yellow"]
// // for (i=0 ; i < color.length ;i++ ) {
// //     console.log(color[i]);
// // }
// for(var item of color){
//     console.log(item);
// }
// // Exercice3:
var fruits={
    pomme =4 ,
    poire =0,
    banane=10,
    tomate=6,
}
for(fruit in fruits){
    console.log
}
var tableau3=[];
tableau3.push("banane");// ajouter un element a la fin
tableau3.pop();// supprimer le dernier element
tabealu3.shift();//supprimer le premier element 
tableau3.unshift(); //ajouter un element au debut )