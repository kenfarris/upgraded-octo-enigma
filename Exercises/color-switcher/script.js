console.log('connected')

let body = document.querySelector("body");

let yellowCircle = document.getElementById("yellowButton");

yellowCircle.addEventListener("click", turnPageYellow)

function turnPageYellow(){
    console.log('turn me yellow');

    body.style.backgroundColor = "yellow"
}

