// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let num = 0;
let score = 20;
document.querySelector('.score').textContent = score;
const secretMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    secretMessage('⛔ No number!');
    // document.querySelector('.message').textContent = ;
  }

    if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    secretMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.highscore').textContent = score;
    if(num < score){
        num = score;
        document.querySelector('.highscore').textContent = num;
    }
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    }else if(guess !== secretNumber){
        if(score > 1){
            guess > secretNumber ? secretMessage('📈 Too high!'): secretMessage( '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});