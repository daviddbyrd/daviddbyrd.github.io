function subjects(){
    var subjects = [];
    var grades = [];
    var letterGrades = [];
    var i = 0, j=0;
    var placeholder = prompt("Please enter subject number " + (i+1) + ", and enter 'finish' when you have entered all subjects:");

    while(placeholder != "finish"){
        subjects[i]=placeholder;
        placeholder = prompt("Please enter subject number "+(i+2)+", and enter 'finish' when you have entered all subjects:");
        i++;
    }

    for(j=0; j<i; j++){
        placeholder = prompt("Please enter grade (from 0 to 100) for "+(subjects[j])+":");
        grades[j]=parseInt(placeholder);
    }

    for(j=0; j<i; j++){
        if(grades[j] >= 90){
            letterGrades[j]="A+";
        }
        else if(grades[j] >= 85){
            letterGrades[j]="A";
        }
        else if(grades[j]>=80){
            letterGrades[j]="A-";
        }
        else if(grades[j]>=75){
            letterGrades[j]="B+";
        }
        else if(grades[j]>=70){
            letterGrades[j]="B";
        }
        else if(grades[j]>=65){
            letterGrades[j]="C+";
        }
        else if(grades[j]>=60){
            letterGrades[j]="C";
        }
        else if(grades[j]>=55){
            letterGrades[j]="D+";
        }
        else if(grades[j]>=50){
            letterGrades[j]="D";
        }
        else if(grades[j]>=40){
            letterGrades[j]="E";
        }
        else{
            letterGrades[j]="F";
        }
    }

    for(j=0; j<i; j++){
        document.getElementById("placeholder").innerHTML+="Grade for "+(subjects[j])+": "+(grades[j])+" ("+letterGrades[j]+")<br>";
    }
}

subjects();