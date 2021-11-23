function myFunction() {
    console.log('It works');
     let random = Math.floor(Math.random() * 255);
        let colorString = `${random},${random},${random}`;
   console.log(colorString);
  }

function setBackgroundColor(){
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    let colorString = `${random1},${random2},${random3}`;
    console.log('Yeah!');
    document.body.style.background = `rgb(${colorString})`;
}

var currentColor = Array (0,0,0);

function changeColor (r,g,b){
    currentColor[0] += r;
    currentColor[1] += g;
    currentColor[2] += b;
    // let colorString = `${r},${g},${b}`;
    currentColor[0] = currentColor[0] %255
    currentColor[1] = currentColor[1] %255
    currentColor[2] = currentColor[2] %255
    document.getElementById("buttonall").style.backgroundColor = `rgb(${currentColor})`;
    console.log(currentColor);

    // document.getElementById("red").style.backgroundColor = "red";

}