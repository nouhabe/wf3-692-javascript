var fruitsLegumes = ["orange","tomato","fraise","framboise","pomme","poire","concombre","aubergine",
"carotte","kiwi","ananas","banane"];
var panier = [];
// j=0;
// for( i = 0 ; i < fruitsLegumes.length ; i++ ){
//     // console.log(fruitsLegumes[i]);
//     panier.push(fruitsLegumes[i]);
//      fruitsLegumes.splice(j,1);
//    j++;
//     // console.log(panier);
//     console.log(fruitsLegumes);
// }

for( i = 0 ; i < fruitsLegumes.length ; i++){
    // console.log(fruitsLegumes[i]);
    // console.log(i);
    panier.push(fruitsLegumes[i]);
    fruitsLegumes.shift();
   
   i--;
}
console.log('fruitsLegumes', fruitsLegumes);
console.log('panier', panier);


// var panier2 = [
//     {nom =" orange", prix = 3},
//     {nom =" fraise", prix = 4},
//     {nom =" orange", prix = 3},
//     {nom =" fraise", prix = 4}
// ] ;
// var prixTotalsFruitsLegumes = [];
// var quantité =
// var resultat = function(panier){
//     for(var article in panier2){
        
//         let prixTotal = prix * Object.size(panier);
//         return prixTotal;
//     }
//     prixTotalsFruitsLegumes.push(prixTotal) 
// }
   