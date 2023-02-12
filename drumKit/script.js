'use strict';

window.addEventListener('keydown', function(e){
    // if(e.keyCode == 65){
    //     const audio0 = document.querySelector(".A");
    //     document.querySelector('.KeyA').classList.add('playing')
    //     audio0.currentTime =0;
    //     audio0.play();
    // }
    // else if(e.keyCode == 83){
    //     const audio1 = document.querySelector(".S");
    //     document.querySelector('.KeyS').classList.add('playing')
    //     console.log(audio1);
    //     audio1.currentTime = 0;
    //     audio1.play();
    // }
    // else if(e.keyCode == 68){
    //     const audio2 = document.querySelector(".D");
    //     document.querySelector('.KeyD').classList.add('playing')
    //     audio2.currentTime = 0;
    //     audio2.play();
    // }
    // else{
    //     return;
    //     document.querySelector('.KeyA').classList.remove('playing');
    //     document.querySelector('.KeyS').classList.remove('playing');
    //     document.querySelector('.KeyD').classList.remove('playing')
    // }
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    // console.log(key);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

    
})


function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    // console.log(e);
    // key.classList.remove('playing');
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));














// const person = {fname: "MAnvendra",
//     lname: "pratapSingh",
//     age: 23,

// }
// console.log(person);
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//     console.log(typeof x, typeof numbers, typeof numbers[x], x, numbers[x]);
//   txt += numbers[x] + "<br>"; 
// }
