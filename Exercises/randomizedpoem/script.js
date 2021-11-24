let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];

  let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];

function renderPoem() {
       console.log('it works');
    let poem = document.querySelector(".poem");
    let element_from_array_one = array_one[Math.floor(Math.random()*array_one.length)];
    let element_from_array_two = array_two[Math.floor(Math.random()*array_two.length)];
    let paragraph = document.createElement("p");
    paragraph.textContent=`${element_from_array_one}${element_from_array_two}`;
}

  let btn = document.querySelector("button");
  btn.addEventListener("click",renderPoem);