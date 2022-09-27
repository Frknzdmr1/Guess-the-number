
var enteredNumber = document.querySelector('#entered-number');
var numberRange = document.querySelector('#numberRange');
var checkBtn = document.querySelector('#btn-check');
var counts = document.querySelector('#counts');
var guessedNumbers = document.querySelector('#guessed-numbers');
var result = document.querySelector('#result');
var newGameBtn = document.querySelector('.new-game');
var currentScore = 0; 
var randomNumber = Math.ceil(Math.random()*100);

checkBtn.addEventListener('click', function(){

    var guessedNumber = document.querySelector('#entered-number').value;

    if(guessedNumber < 0 || guessedNumber > 100){
    alert('Please enter a number between 1 and 100');
       
    }

    if (randomNumber == guessedNumber){
        result.textContent = 'Congrats, your number is right!';
        let backgroundColor = document.querySelector('#body')
        
    }else {
        
    
    if (guessedNumber > randomNumber){
        result.textContent = 'Your number is too high';

    }else if(guessedNumber < randomNumber){
        result.textContent = 'Your number is too low';
    
    }}currentScore++;
    counts.textContent = currentScore
    enteredNumber.value = ''

});

newGameBtn.addEventListener('click', function(e){
    result.textContent = 'Start guessing!'
    counts.textContent = '0'
    currentScore = '0'
    counts.textContent = currentScore
});