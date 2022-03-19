'use strict';

let busket = document.getElementById('busket');
let plusToBusket = document.querySelector('.plus_to_busket');
let busketBlock = document.getElementById('busket_block');
let flyToBusket = document.getElementById('fly_to_busket');
let activeImg = document.getElementById('card_img_active');


let busketInner = busket.innerHTML
let busketNum = Number.parseInt(busketInner)
let busketStr = String(busketNum);

function addBusket(){
    busketBlock.classList.add('active')
    activeImg.classList.add('active');
    setTimeout(() => {
        busketBlock.classList.remove('active');
        activeImg.classList.remove('active')
    }, 2000);
}

function fly(){
    flyToBusket.classList.add('fly');
    setTimeout(() => {flyToBusket.classList.remove('fly')}, 1999)
}

plusToBusket.addEventListener('click', () => {
    busketNum += 1;
    busketStr = String(busketNum);
    busket.innerHTML = busketStr;
    addBusket();
    fly()
    if(busketNum === 10){
        alert("Корзина переполнина")
        plusToBusket.disabled = 'true'
    }
})

// offsetX: 1164
// offsetY: 1152
// pageX: 1164
// pageY: 1151