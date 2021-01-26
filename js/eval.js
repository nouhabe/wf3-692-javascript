var fruitsLegumes = ["orange","tomato","fraise","framboise","pomme","poire","concombre","aubergine",
"carotte","kiwi","ananas","banane"];
var panier = [];


for(var i = fruitsLegumes.length-1; i >= 0; i--){
    var fruitRemoved = fruitsLegumes.shift();
    console.log("fruitRemoved: ",fruitRemoved);
    panier.push(fruitRemoved);
}
console.log('fruitsLegumes', fruitsLegumes);
console.log('panier', panier);





var panier2 =[
    {nom :"fraise", prix : 4, quantite:2},
    {nom :"orange", prix : 3, quantite:3},
    {nom :"banane", prix : 5, quantite:2}
] 
 ;
// console.log(panier2);
var prixTotalsFruitsLegumes = [];
 for(i=0; i<panier2.length; i++){
        
    var prixTotal  = panier2[i].prix * panier2[i].quantite;
    prixTotalsFruitsLegumes.push( prixTotal ); 
}             
    console.log(prixTotalsFruitsLegumes);


var resultat=0 ;
for(tot of prixTotalsFruitsLegumes){
    resultat +=tot;
}
console.log(resultat);