//Creating array of words//
const word = ['Tupac','Aaliyah','Biggie','JayZ','Usher'];
var guesses =['5,4,3,2,1']
//Choose word randomly//
let randNum = Math.floor(Math.random()* word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongword = [];
let underScore = [];
let guess = [];
//DOM Manipulation
let docUnderScore = document.getElementsByClassName('underscores');
let docGuessCounter = document.getElementsByClassName('guesscounter');
//=====
console.log(choosenWord);
//Create underscores based on length of word//
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
        
    }
    return underScore;
}
console.log(generateUnderscore());
// Get users guess//
document.addEventListener('keypress',(event)=> {
    let keyword = String.fromCharCode(event.keyCode);
// if Users guess is right
    if(choosenWord.indexOf(keyword) > -1){

    }
    //add to right words array
    rightWord.push(keyword);
    
    //replace underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docGuessCounter[0].innerHTML =guessCounter.join(' ');

    // Check to see if user word matches guess
    if (underScore.join('') == choosenWord) {
        alert('Correct!');
    }

   

   
});

generateUnderscore();


//If wrong push to wrong array//

//for the guess counter
if (guess> numbertoGuess){
    alert("You lose"+ guess);
    guess.push({value:guess,direction:'LOSE'});
}
//continuation of guess counter
canvas.drawString( "You guessed correctly! " + guess + " in " + guesses.length + " guesses");
for(var i=0;i<guesses.length;i++){
    canvas.drawString("Guess #" + (i+1) + ": " + guesses[i].value + " was " + guesses[i].direction);
}