'use script';

let keys = document.querySelectorAll('.key');
// console.log(keys);
let alphabet = document.querySelectorAll('.alphabet');
let capslock = document.querySelector('.capslock');
let skey = document.querySelector('.skey');
let evnt = document.querySelector('#input');
let numeric = document.querySelector('.numeric');
let special = document.querySelector('.special');
let text = "";
let d;


const capLock = function(){
    if(capslock.classList.contains('caps')){
        alphabet.forEach(alpha => {
            let letter = alpha.textContent.toLowerCase();
            alpha.textContent = letter;
        })
        capslock.classList.remove('caps');
    }
    else{
        alphabet.forEach(alpha => {
            let letter = alpha.textContent.toUpperCase();
            alpha.textContent = letter;
        })
        capslock.classList.add('caps');
    }
}

const shiftEvent = function(){
    if(skey.classList.contains('shift')){
        alphabet.forEach(alpha => {
            let letter = alpha.textContent.toLowerCase();
            alpha.textContent = letter;
        })
        skey.classList.remove('shift');
        numeric.classList.remove('hidden');
        special.classList.add('hidden');
        d = false;
    }
    else{
        alphabet.forEach(alpha => {
            let letter = alpha.textContent.toUpperCase();
            alpha.textContent = letter;
        })
        skey.classList.add('shift');
        numeric.classList.add('hidden');
        special.classList.remove('hidden');
        d = true;
    }
            
}
keys.forEach(key => {
    key.addEventListener('click', function(e){
        
        if(e.target.textContent === '↩'){
            text += '\n';
        }
        else if(e.target.textContent === '✕'){
            text = text.slice(0,-1);
        }
        else if(e.target.textContent === '⇧'){
            capLock();
            
        }
        else if(e.target.textContent === 'Shift'){
            shiftEvent();
            
        }
        else if(e.target.textContent === 'Space'){
            text += ' ';
        }
        else{
            
            text += e.target.textContent;
            d = false;
            
        }
        evnt.textContent = text;
        if(skey.classList.contains('shift') && d === false){
            
            alphabet.forEach(alpha => {
                let letter = alpha.textContent.toLowerCase();
                alpha.textContent = letter;
            })
            skey.classList.remove('shift');
            numeric.classList.remove('hidden');
            special.classList.add('hidden');
        }

        
    })
})

window.addEventListener('keydown', function(e){
    if(e.keyCode === 16){
        
        shiftEvent();    
    }
    else if(e.keyCode === 20){
        capLock();
    }
    else if(e.keyCode === 32){
        text += ' ';
    }
    
    else{
        console.log(e);
        d = false;
        if(skey.classList.contains('shift') && d === false){
            
            alphabet.forEach(alpha => {
                let letter = alpha.textContent.toLowerCase();
                alpha.textContent = letter;
            })
            skey.classList.remove('shift');
            numeric.classList.remove('hidden');
            special.classList.add('hidden');
        }
    }
})
