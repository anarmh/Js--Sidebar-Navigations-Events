"use strict";

let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");
let loginButton=document.getElementById("login-btn");

loginButton.addEventListener("click", login);
emailInput.addEventListener("click",function(e){
    if(e.key==="Enter"){
       
        login()
    }
})

passwordInput.addEventListener("click",function(e){
    if(e.key==="Enter"){
        
        login()
    }
})


function login(){

    let email=emailInput.value.trim();
    let password=passwordInput.value.trim();

    if(email===""|| password===""){
        let error=document.createElement("p");
        error.innerText="Bosh buraxmayin";
        error.style.color="red"
    }
    else{
        alert("Login olunduz")
    }
}
