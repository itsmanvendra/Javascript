const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
let mainScore0 = 0;
let mainScore1 = 0;
let player0CurrScore = 0;
let player1CurrScore = 0;
let playing = true;
dice.classList.add('hidden');


const player0Active = function(){
    player0.classList.remove('player--active');
    player1.classList.add('player--active');    
}


const player1Active = function(){
    player1.classList.remove('player--active');
    player0.classList.add('player--active'); 
}

btnRollDice.addEventListener('click', function(){
    if(playing){   
        const num = Math.floor(Math.random()*6)+1;
        // console.log(num);
        dice.classList.remove('hidden');
        dice.src = `dice-${num}.png`;
        if(num === 1){
            if(player0.classList.contains('player--active')){
                player0Active();
                player0CurrScore = 0;
                current0.textContent = player0CurrScore;
            }
            else{
                player1Active();
                player1CurrScore = 0;
                current1.textContent = player1CurrScore;
            }
        }
        else{
            if(player0.classList.contains('player--active')){
                player0CurrScore += num; 
                current0.textContent = player0CurrScore;
            }
            else{
                player1CurrScore += num;
                current1.textContent = player1CurrScore;
            }
        }
    }

} );

btnNewGame.addEventListener('click', function(){
    current0.textContent = 0;
    current1.textContent = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    mainScore0 = 0;
    mainScore1 = 0;
    player0CurrScore = 0;
    player1CurrScore = 0;
    if(!player0.classList.contains('player--active')){
        player1Active();
    }
    if(player0.classList.contains('player--winner')){
        player0.classList.remove('player--winner');
    }
    if(player1.classList.contains('player--winner')){
        player1.classList.remove('player--winner');
    }
    dice.classList.add('hidden');
});

btnHold.addEventListener('click', function(){
    if(playing){
        if(player0.classList.contains('player--active')){
            mainScore0 += player0CurrScore;
            score0.textContent = mainScore0;
            if(mainScore0 >= 50){
                player0.classList.add('player--winner');
                player0.classList.remove('player--active');
                playing = false;
                dice.classList.add('hidden');
            }
            else{
                player0CurrScore = 0;
                current0.textContent = 0;
                player0Active();
            }
        }
        else{
            mainScore1 += player1CurrScore;
            score1.textContent = mainScore1;
            if(mainScore1 >= 50){
                player1.classList.add('player--winner');
                player1.classList.remove('player--active');
                playing = false;
                dice.classList.add('hidden');
            }
            else{
                player1CurrScore = 0;
                current1.textContent = 0;
                player1Active();
            }
        }
    }
    

});




