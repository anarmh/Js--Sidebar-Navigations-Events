"use strict";

let elemInput = document.querySelector("input");


// function inputEvent(e) {
//     console.log("input event")
// }

// elemInput.addEventListener("keyup", inputEvent)


// document.getElementById("test").addEventListener("change",function(e){
//    if(e.target.value=="1"){
//     elemInput.value="Html"
//    }
// })
let input = document.querySelector("#products input");
let button = document.querySelector("#products button");
let ul = document.querySelector("#products ul")
let deleteElem=document.querySelector(".delete-all")


button.addEventListener("click", function () {
    let inputValue = input.value;
    
    if (inputValue == "") {
        alert("Dont empty")
        return
    }


    let list = document.querySelectorAll("li");

    for (const item of list) {
        if (item.innerText == inputValue) {
            alert("item already exist")
            input.value = "";
            return
        }
    }
    let li = document.createElement("li");
    li.className = "list-group-item my-1";

    li.innerText = inputValue;

    ul.append(li);


    let icon = document.createElement("i");
    icon.className = "fas fa-times delete";
    icon.onclick= function() { 
        this.parentElement.remove()};
    li.appendChild(icon)
    

    input.value = "";
})

function removeElem(removedElem,icon){
    icon.addEventListener("click",function(){
        removedElem.remove();
    })
}
// let input=document.querySelector("input");
// console.log(input);
// let button=document.querySelector("button");
// console.log(button);
// let ol=document.querySelector("ol")
// console.log(ol);

// button.addEventListener("click",function(){

    
//     if(isNaN(input.value)){
//         alert("Not a Number!")
//         return;
//     }
//     else{
//         let li=document.createElement("li")
//         li.innerText=input.value
//         ol.append(li);
        
//     }


// })

let sidebar=document.querySelector(".sidebar");
let closeIcon=document.querySelector(".close")
let openIcon=document.querySelector(".open");


openIcon.addEventListener("click",function(){
    sidebar.classList.remove("hide");
    this.classList.add("d-none")
    closeIcon.classList.remove("d-none")
})
closeIcon.addEventListener("click",function(){
    sidebar.classList.add("hide");
    this.classList.add("d-none")
    openIcon.classList.remove("d-none")
})

elemInput.addEventListener("keyup",function(e){
    if(e.keyCode==="13"){
        document.querySelector("button").click();
    }
   
})
document.querySelector("button").addEventListener("click",function(e){
    alert(e.target.previousElementSibling.value)
})
