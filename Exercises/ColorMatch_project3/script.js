function getRandomInt(min=0, max=17 ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var colorString = Array (0,0,0);


function setBackgroundColor(){
    let random1 = Math.floor(getRandomInt() * 15);
    let random2 = Math.floor(getRandomInt() * 15);
    let random3 = Math.floor(getRandomInt() * 15);
    colorString = [random1,random2,random3]
    console.log('Yeah!', colorString);
    document.getElementById("buttonall").style.backgroundColor = `rgb(${colorString})`;
    countDown = 10
    updateCount()
}

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
var winCount = 2;
    

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

   function setCellColor(){
   var babysorry = document.getElementsByClassName("Redsquare")[0];
    let rValue = 255;
    let gValue = 0;
    let bValue = 0;
    var cellindex= 0;
    for(i=255; i>0; i=i-30) {
        colorString = [i, gValue, bValue]
        babysorry.children[cellindex].style.backgroundColor = `rgb(${colorString})`;
        babysorry.children[cellindex].innerHTML = "hi";
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
         babysorry.children[cellindex].innerHTML = "hi";
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
         babysorry.children[cellindex].innerHTML = "hi";
         cellindex = cellindex+1
     console.log("ok");
     }
 }
setCellColor()
setGreenCellColor()
setBlueCellColor()