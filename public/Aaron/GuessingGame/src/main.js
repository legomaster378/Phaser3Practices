const myGuess=Math.floor(Math.random()*9999);
let guesses=0;
let guess;
while (guess!==myGuess){
    guess=parseInt(prompt("What number am I thinking of?"),10);
    guesses++;
    if (guess<myGuess){
        alert("Higher.");

    }
    else if (guess>myGuess){
        alert("Lower.");
    }
}
if (guesses>50){
    alert("wow u suck");
}
else {
    alert(`Well done! You did it in ${guesses} tries!`);
}