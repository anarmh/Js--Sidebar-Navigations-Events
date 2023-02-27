"use strict";

let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");
let loginButton=document.getElementById("login-btn");
let myForm = document.getElementById("myForm");
let errors=document.getElementById("errors");
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    login();
})

// loginButton.addEventListener("click", login);
// emailInput.addEventListener("click",function(e){
//     if(e.key==="Enter"){
       
//         login()
//     }
// })

// passwordInput.addEventListener("click",function(e){
//     if(e.key==="Enter"){
        
//         login()
//     }
// })
document.onkeydown=function(e){
    if(e.keyCode==13)
    login();
}



function login(){

    let email=emailInput.value.trim();
    let password=passwordInput.value.trim();
    if(email==="" || password===""){
        let error=document.createElement("p");
        error.innerText="Bosh buraxmayin";
        error.style.color="red"
        errors.append(error)

    }
    else{
        alert("Login olunduz")
    }
}
