'use strict';

const btn = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
const clear = document.querySelector('.clear');
const allClear = document.querySelector('.allClear');
const background = document.querySelector('.background');
let string = "";
let first = "";
let sign = "";
btn.forEach(button => {
    button.addEventListener('click', function(e){

        if(e.target.innerText === '='){

            string =  eval(`${first}${sign}${Number(string)}`);
            input.value = string;
            string = "";
            first = "";
        }
        else if(e.target.innerText === '*' || e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '/' || e.target.innerText === '%'){
            first = Number(string);
            sign = e.target.innerText;
            string = "";
            
            // console.log(e.target.innerText);
        }
        else {
            string += e.target.innerText;
            input.value = string;
        }
    })
});


    document.addEventListener('keydown', function(e){
            if(e.key === '=' || e.key === 'Enter'){

            string =  eval(`${first}${sign}${Number(string)}`);
            input.value = string;
            string = "";
            first = "";

        }
        else if(e.key === '*' || e.key === '+' || e.key === '-' || e.key === '/' || e.key === '%'){
            first = Number(string);
            sign = e.key;
            string = "";
            // console.log(e);
            // console.log(e.target.innerText);
        }
        else if((e.keyCode >= 96) && (e.keyCode <= 105)){
            // console.log(e);
            string += e.key;
            input.value = string;
        }
        
    })



allClear.addEventListener('click', function(){
    string = "";
    first = "";
    sign = "";
    input.value = string;
})

clear.addEventListener('click', function(){
    string = "";
    input.value = string;

})

document.querySelector('.theme').addEventListener('click', function(){
    document.querySelector('.theme').classList.toggle('dark');
    document.querySelector('.theme').classList.toggle('light');
    document.querySelector('#icon').classList.toggle('fa-moon');
    document.querySelector('#icon').classList.toggle('fa-sun');

    background.classList.toggle('bg-dark');
    background.classList.toggle('bg-light');
    clear.classList.toggle('dark');
    clear.classList.toggle('light');
    btn.forEach(button => {
        button.classList.toggle('dark');
        button.classList.toggle('light');
    })


})