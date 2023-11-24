function rockPaperScissors(){

    var userInput = prompt("Let's play! Enter rock, paper, or scissors:").toLowerCase();
    var compInputs = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * 3);
    var compInput = compInputs[random];

    if(userInput=="rock"){
        if(compInput=="rock"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". It's a draw."
        }
        else if(compInput=="paper"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". You lose."
        }
        else if(compInput=="scissors"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". You win!"
        }

    }
    else if(userInput=="paper"){
        if(compInput="rock"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". You win!"
        }
        else if(compInput=="paper"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". It's a draw."
        }
        else if(compInput=="scissors"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". You lose."
        }

    }
    else if(userInput=="scissors"){
        if(compInput=="rock"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". You win!"
        }
        else if(compInput=="paper"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". You lose."
        }
        else if(compInput=="scissors"){
            document.getElementById("placeholder").innerHTML="You played "+userInput+", Computer played "+compInput+". It's a draw."
        }
    }
    else {
        document.getElementById("placeholder").innerHTML="Input not recognised."
    }
}
rockPaperScissors()