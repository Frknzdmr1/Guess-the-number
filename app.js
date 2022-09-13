var randomNumber = Math.ceil(Math.random()*100);
var enteredNumber = document.querySelector('.entered-number')
var numberRange = document.querySelector('.numberRange')
var checkBtn = document.querySelector('.btn-check')
var counts = document.querySelector('.counts')
var guessedNumbers = document.querySelector('.guessed-numbers')
var result = document.querySelector('.result')
var newGameBtn = document.querySelector('.new-game')



checkBtn.addEventListener('click' , function(){
    var guessedNumber = document.querySelector('.entered-number').value;
   
    if(guessedNumber < 0 || guessedNumber > 100){
        alert('Please enter a number between 1 and 100')
        guessedNumber.value = ''; // ya array de birak yada ='' yap
        return
    }

    if (randomNumber == guessedNumber){
        result.textContent = 'Congrats, your number is right!';
    }else{
        result.textContent = 'Wrong';
    
    if (guessedNumber > randomNumber){
        result.textContent = 'Your number is too high';

    }else if(guessedNumber < randomNumber){
        result.textContent = 'Your number is too low'
    }

    }
})