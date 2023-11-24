function randomGuess(){

    var randomArray=[];
    var i=0, numMatches=0;

    for(i=0;i<10;i++){
        randomArray[i] = Math.floor(Math.random() * 5)+1;
    }

    userGuess = prompt("Please guess a number between 1 and 5 (inclusive): ");
    
    for(i=0;i<10;i++){
        if(randomArray[i]==userGuess){
            numMatches++;
        }
    }

    document.getElementById("placeholder").innerHTML="Your guess appeared "+numMatches+" times in a randomly generated list of 10 numbers.";

}
randomGuess();