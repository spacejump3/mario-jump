// JavaScript Document
console.log("hello CSS!");
var dpadLeft = document.querySelector(".left")
var dpadRight = document.querySelector(".right")
var dpadDown = document.querySelector(".down")
var dpadUp = document.querySelector(".up")

var dpad = document.querySelector(".dpad")

console.log(dpadLeft, dpad, dpadUp)


// ----
dpadLeft.addEventListener("mousedown", function() {
    dpad.classList.add("left-hover")
})

dpadLeft.addEventListener("mouseup", function(){
    dpad.classList.remove("left-hover")
})
// ----

// ----
dpadRight.addEventListener("mousedown", function() {
    console.log("hello")
    dpad.classList.add("right-hover")
})

dpadRight.addEventListener("mouseup", function(){
    dpad.classList.remove("right-hover")
})
// ----

// ----
dpadUp.addEventListener("mousedown", function() {
    console.log("hello")
    dpad.classList.add("up-hover")
})

dpadUp.addEventListener("mouseup", function(){
    dpad.classList.remove("up-hover")
})
// ----

// ----
dpadDown.addEventListener("mousedown", function() {
    console.log("hello")
    dpad.classList.add("down-hover")
})

dpadDown.addEventListener("mouseup", function(){
    dpad.classList.remove("down-hover")
})
// ----

var redButton = document.querySelector(".a");
var block = document.querySelector(".player");

function latenSpringen() {
    block.classList.add('spring')
    setTimeout(function(){
        block.classList.remove("spring")
    },400)
    console.log(block)
}


redButton.addEventListener("click", latenSpringen)

console.log(block)

var bgColorChange = document.querySelector("#bgcolor");

bgColorChange.addEventListener("click", ()=>{
    document.body.classList.toggle("colorchange")
})