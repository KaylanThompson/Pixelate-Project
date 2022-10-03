// Your code here
let table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

makeRow();

const button = document.getElementById("add-row");
button.addEventListener("click", makeRow);



table.addEventListener("click", colorize)



 const color = document.getElementsByTagName("select")[0]
 let chosenColor = "red"


 color.addEventListener("change", function (event){
    chosenColor = event.target.value
 }) 


function colorize (event){
   const target = event.target
   if (target.className.length) {
    target.className = ''
   }else {
    target.className = chosenColor
   }
 }

 












 