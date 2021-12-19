function getRandomInt(min=0, max=17 ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBackgroundColor(){
    // let random1 = (Math.floor(getRandomInt() * 30) + 15) % 256;
    // let random2 = (Math.floor(getRandomInt() * 30) + 15) % 256;
    // let random3 = (Math.floor(getRandomInt() * 30) + 15) % 256;
    winColorString = [random_item(items),random_item(items),random_item(items)]
    console.log('Yeah!', winColorString);
    document.getElementById("buttonall").style.backgroundColor = `rgb(${winColorString})`;
    countDown = 10
    updateCount()
}

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [15, 45, 75, 105, 135, 165, 195, 225, 255];
console.log(random_item(items));

var currentColor = Array (0,0,0);

function changeColor (r,g,b){
    currentColor[0] += r;
    currentColor[1] += g;
    currentColor[2] += b;
    currentColor[0] = currentColor[0] %256
    currentColor[1] = currentColor[1] %256
    currentColor[2] = currentColor[2] %256
    document.body.style.background  = `rgb(${currentColor})`;
    console.log(currentColor);
    if (currentColor.join() == colorString.join() ) {
        winState()
    } 
}
var winCount = 0;
    

function winState (){
    winCount += 1;
    document.getElementById("winCount").innerHTML = winCount;
    console.log("Win");

}

var countDown = 10;
  function updateCount() {
   countDown = countDown - 1;
   setTimeout(updateCount, 1000);
   if (countDown >= 0 ){
       
    document.getElementById("countDown").innerHTML = countDown;
}
   if (countDown <= 0 ){
    winCount = 0
    document.getElementById("winCount").innerHTML = winCount;

   }
  }
var rValue = 0;
var gValue = 0;
var bValue = 0;
var currentColor = Array (rValue,gValue,bValue);
var winColorString = Array (0,0,0);


  function setColor(colorString){
    var rCellValue = colorString.split(",")[0];
    var gCellValue = colorString.split(",")[1];
    var bCellValue = colorString.split(",")[2];
    rValue = parseInt(rCellValue) || rValue ;
    gValue = parseInt(gCellValue) || gValue ;
    bValue = parseInt(bCellValue) || bValue ;
    currentColor = Array (rValue,gValue,bValue);
    document.body.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
    console.log(`${rValue},${gValue},${bValue}`);
    if (currentColor.join() == winColorString.join() ) {
        winState()
    } 
  }

   function setCellColor(){
   var babysorry = document.getElementsByClassName("Redsquare")[0];
    let rValue = 255;
    let gValue = 0;
    let bValue = 0;
    var cellindex= 0;
    for(i=255; i>0; i=i-30) {
        colorString = [i, gValue, bValue]
        babysorry.children[cellindex].style.backgroundColor = `rgb(${colorString})`;
        babysorry.children[cellindex].innerHTML = colorString;
        cellindex = cellindex+1
    console.log("ok");
    }
}

function setGreenCellColor(){
    var babysorry = document.getElementsByClassName("Greensquare")[0];
     let rValue = 0;
     let gValue = 255;
     let bValue = 0;
     var cellindex= 0;
     for(i=255; i>0; i=i-30) {
         colorString = [rValue, i, bValue]
         babysorry.children[cellindex].style.backgroundColor = `rgb(${colorString})`;
         babysorry.children[cellindex].innerHTML = colorString;
         cellindex = cellindex+1
     console.log("ok");
     }
 }

 function setBlueCellColor(){
    var babysorry = document.getElementsByClassName("Bluesquare")[0];
     let rValue = 0;
     let gValue = 0;
     let bValue = 255;
     var cellindex= 0;
     for(i=255; i>0; i=i-30) {
         colorString = [rValue, gValue, i]
         babysorry.children[cellindex].style.backgroundColor = `rgb(${colorString})`;
         babysorry.children[cellindex].innerHTML = colorString;
         cellindex = cellindex+1
     console.log("ok");
     }
 }
setCellColor()
setGreenCellColor()
setBlueCellColor()