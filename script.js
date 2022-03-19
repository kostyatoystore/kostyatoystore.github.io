"use strict";

let burgerBtn = document.getElementById('burger_btn');
let burgerMenu = document.getElementById('burger_menu');
let firstBurgerLink = document.getElementById('first_burger_link');
let secondBurgerLink = document.getElementById('second_burger_link');
let inputEmail = document.getElementById('input_email');
let inputSubmit = document.getElementById('input_submit');
let messageSent = document.getElementById('sent_message')
let plane = document.getElementById('plane');
let logo = document.getElementById('logo');
let body = document.body;


// let coordin = firstBurgerLink.getBoundingClientRect().top;

// function end(){
//    if(burgerMenu.getBoundingClientRect().left = 0){
//        firstBurgerLink.style.transform = "0";
//    }
// }

// когда октрывается бургер меню ссылки вылетают по очереди, когда спереди идущая дошла до левого края

burgerBtn.addEventListener('click', () =>{
    burgerBtn.classList.toggle("open");
    burgerMenu.classList.toggle("open");
    if(burgerBtn.classList.contains('open')){
        logo.classList.add("open");
    } else {
        logo.classList.remove("open");
    }
});


plane.addEventListener('click', () =>{
    plane.classList.add('fly')
});

function active(){
    setTimeout(() =>{messageSent.classList.add('active')}, 1000);
    setTimeout(() =>{messageSent.classList.remove('active')}, 3000);
    
}

let inputEmailStr = String(inputEmail);
inputSubmit.addEventListener('click', () => {
            inputEmail.value = ' ';
            plane.classList.add('fly');
            active();
            inputSubmit.classList.remove()
            inputSubmit.disabled = true;
            inputEmail.disabled = true;

    })