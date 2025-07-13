/* use object */

let  score =  
JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties: 0,
}

updateScoreElement();

/*we can aslo use this code 

      if (score === null){
     score = {
     wins: 0,
     losses:0,
     ties:0
            }
}*/

/* use parameter */

function playerGame (playerMove){
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissor'){
if (computerMove === 'rock')
{result = 'You lose'}
else if( computerMove === 'paper'){
result = 'You win';
}
else if ( computerMove === 'scissor')
{
result ='tie';
}
}

else if (playerMove === 'paper'){
if (computerMove === 'rock') {
result ='You win';
}
else if (computerMove === 'paper') {
result = 'tie';
}
else if (computerMove === 'scissor')
{
result = 'You lose';
}
}

else if (playerMove === 'rock'){
if (computerMove ==='rock'){
result = 'tie';}
else if (computerMove === 'paper') 
{result = 'You lose'}
else if( computerMove === 'scissor')
{
  result = 'You win';
}
}
/* use object */

if (result === 'You win')
{
score.wins = score.wins + 1 ;
}
else if (result === 'You lose')
{
score.losses = score.losses + 1
}
else if (result === 'tie')
{
score.ties = score.ties + 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement()

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move').innerHTML = `You
<img src="image/${playerMove}-emoji.png" class="move-icon">
<img src="image/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`}

/* Use return function and function */

  function pickComputerMove(){
    const randomNumber =  Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber <1/3)
  { computerMove ='rock';}
  else if(randomNumber >= 1/3 && randomNumber < 2/3) {computerMove ='paper';}
  else if (randomNumber >=2/3 && randomNumber<1)
  {computerMove ='scissor';}
  return computerMove ;
  }