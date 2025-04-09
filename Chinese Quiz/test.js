
// myButton.addEventListener("click", changeBackground);
// myButton.addEventListener("click", logClick);





//Element Listener Example
// const enterExitColorMap = {
//     enter: "black",
//     exit: "green"
// }


// let myButton = document.getElementById("cats");

// myButton.addEventListener("mouseenter", onEnter);
// myButton.addEventListener("mouseleave", onExit);

// function onEnter() {
//     document.body.style.backgroundColor = enterExitColorMap["enter"];
// }

// function onExit() {
//     document.body.style.backgroundColor = enterExitColorMap["exit"];
// }







// function makeBackgroundBlack(){
//     document.body.style.backgroundColor = "black";
// }

// function makeBackgroundWhite(){
//     document.body.style.backgroundColor = "white";
// }

// function logClick(){

//     console.log("clicked button");

// }

// function changeBackground(){

//     //You can do it like this together or separate function, works the same
//     //console.log("changing background.");
//     document.body.style.backgroundColor = "green";

// }







//DOM example
document.addEventListener("DOMContentLoaded", onDOMLoaded);

const enterExitColorMap = { enter: "black", exit: "white" };

function onDOMLoaded() {
    console.log("DOM finished loading");

    let myButton = document.getElementById("cats");
    myButton.addEventListener("mouseenter", onEnter);
    myButton.addEventListener("mouseleave", onExit);

}

function onEnter() {
    document.body.style.backgroundColor = enterExitColorMap["enter"];
}

function onExit() {
    document.body.style.backgroundColor = enterExitColorMap["exit"];
}
