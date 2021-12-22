function getRandomInt(min=0, max=17 ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var activeGame = false;


function setBackgroundColor(){
    activeGame = true;
    winColorString = [random_item(items),random_item(items),random_item(items)]
    console.log('Yeah!', winColorString);
    document.getElementById("buttonall").style.backgroundColor = `rgb(${winColorString})`;
    countDown = 100
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
    countDown=100
    document.getElementById("countDown").innerHTML = countDown;
    rValue = 255;
    gValue = 255;
    bValue = 255;
    currentColor = Array (rValue,gValue,bValue);
    document.body.style.background  =  `url(data:image/png;base64,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)`;
    document.getElementById("buttonall").style.background = `url(data:image/png;base64,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)`;
    countDown=100
    document.getElementById("countDown").innerHTML = countDown;
    activeGame = false;
}

var countDown = 10;
  function updateCount() {
   countDown = countDown - 1;
   setTimeout(updateCount, 1000);
   if (activeGame == false){
    document.getElementById("countDown").innerHTML = 100;
   }
   if (countDown >= 0 && activeGame == true ){   
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

var pastCell;

  function setColor(event, colorString){
    // pastCell.classList.remove("activeCell");
    // pastCell = cell;
    var rCellValue = colorString.split(",")[0];
    var gCellValue = colorString.split(",")[1];
    var bCellValue = colorString.split(",")[2];
    if (parseInt(rCellValue) != 0) {
        toggleRedCells();
    }
    if (parseInt(gCellValue) != 0) {
        toggleGreenCells();
    }
    if (parseInt(bCellValue) != 0) {
        toggleBlueCells();
    }
    var cell = event.target;
    cell.classList.add("activeCell");
    rValue = parseInt(rCellValue) || rValue ;
    gValue = parseInt(gCellValue) || gValue ;
    bValue = parseInt(bCellValue) || bValue ;
    currentColor = Array (rValue,gValue,bValue);
    document.getElementById("currentColor").innerHTML = currentColor;
    document.body.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
    console.log(`${rValue},${gValue},${bValue}`);
    if (currentColor.join() == winColorString.join() ) {
        winState()
    } 
  }

  function toggleRedCells(){
    var slides = document.querySelectorAll('.Redsquare .cell');
    console.log("It works");
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("activeCell");
        
    }
  }

  function toggleBlueCells(){
    var slides = document.querySelectorAll('.Bluesquare .cell');
    console.log("It works");
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("activeCell");
        
    }
  }

  function toggleGreenCells(){
    var slides = document.querySelectorAll('.Greensquare .cell');
    console.log("It works");
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("activeCell");
        
    }
  }


  function setCellColor(){
    var colorinfinity = document.getElementsByClassName("Redsquare")[0];
     let rValue = 255;
     let gValue = 0;
     let bValue = 0;
     var cellindex= 0;
     for(i=255; i>0; i=i-30) {
         colorString = [i, gValue, bValue]
         colorinfinity.children[cellindex].style.backgroundColor = `rgb(${colorString})`;
        //  colorinfinity.children[cellindex].innerHTML = colorString;
         cellindex = cellindex+1
     console.log("ok");
     }
 }

function setGreenCellColor(){
    var colorinfinity = document.getElementsByClassName("Greensquare")[0];
     let rValue = 0;
     let gValue = 255;
     let bValue = 0;
     var cellindex= 0;
     for(i=255; i>0; i=i-30) {
         colorString = [rValue, i, bValue]
         colorinfinity.children[cellindex].style.backgroundColor = `rgb(${colorString})`;
        //  colorinfinity.children[cellindex].innerHTML = colorString;
         cellindex = cellindex+1
     console.log("ok");
     }
 }

 function setBlueCellColor(){
    var colorinfinity = document.getElementsByClassName("Bluesquare")[0];
     let rValue = 0;
     let gValue = 0;
     let bValue = 255;
     var cellindex= 0;
     for(i=255; i>0; i=i-30) {
         colorString = [rValue, gValue, i]
         colorinfinity.children[cellindex].style.backgroundColor = `rgb(${colorString})`;
        //  colorinfinity.children[cellindex].innerHTML = colorString;
         cellindex = cellindex+1
     console.log("ok");
     }
 }

 setCellColor()

setGreenCellColor()
setBlueCellColor()