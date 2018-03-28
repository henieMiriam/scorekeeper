var scores= {}; // va a llevar el registro de losjugadore y sus puntos
//enla siguiente funsion se genera el valor inicial
function createPayer(object,name){
  object[name.toLowerCase()]= 0;
  //name crea una asociasion para recibir los puntages

}

function addPoints(name, points){
  scores[name.toLowerCase()] += points;
  //+= es el equivalente a que key guarde el resultado anterior y sume el nuevo valor agregaado para darnos un resultado, tambien se puede escribir como key= key + valor
  console.log(scores);
}
function bringAllPoints(){
var arrayPlayers = object.keys(scores);
var resultados = "";
for (var k=0; k<arrayPlayers.length; k++){
resultados += arrayPlayers[k] +scores [arrayPlayers[k]];

}
return resultados;

//console.log(arrayPlayers);
}
createPlayer(scores, "Ana");
addPoints("Ana", 20);
createPoint("Ana", 40);
createPlayer(scores, "Silvana");
addPoints("silvana", 50);
console.log(bringAllPoints());
