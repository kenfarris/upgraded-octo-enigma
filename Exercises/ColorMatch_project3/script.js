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
var winCount = 0;
    

function winState (){
    winCount += 1;
    document.getElementById("winCount").innerHTML = winCount;
    console.log("Win");

}


