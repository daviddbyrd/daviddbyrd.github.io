function bottles(){
    var i;
    for(i=99;i>2;i--){
        document.getElementById("placeholder").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer<br>";
        document.getElementById("placeholder").innerHTML+="Take one down and pass it around, "+(i-1)+" bottles of beer on the wall<br><br>";    
    }

    document.getElementById("placeholder").innerHTML+=" 2bottles of beer on the wall, 2 bottles of beer<br>";
    document.getElementById("placeholder").innerHTML+="Take one down and pass it around, 1 bottle of beer on the wall<br><br>";
    document.getElementById("placeholder").innerHTML+="1 bottle of beer on the wall, 1 bottle of beer<br>";
    document.getElementById("placeholder").innerHTML+="Take one down and pass it around, no more bottles of beer on the wall<br><br>";
    document.getElementById("placeholder").innerHTML+="No more bottles of beer on the wall, no more bottles of beer<br>";
    document.getElementById("placeholder").innerHTML+="Go to the store and buy some more, 99 bottles of beer on the wall<br><br>";
}

bottles();