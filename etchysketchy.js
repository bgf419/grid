console.log("Run");

let gridSizeString = prompt("How many square squares do you want?");
var gridSize = Number(gridSizeString);
console.log(gridSize)
for(i=0;i<gridSize;i++){
let gridContainer = document.querySelector('.grid-container');
let div = document.createElement('div');
div.classList.add('grid-locksCol');
gridContainer.appendChild(div);}

for(i=0;i<gridSize;i++){
let gridContainer = document.querySelector('.grid-container');
let div = document.createElement('div');
div.classList.add('grid-locksRows');
gridContainer.appendChild(div);}
