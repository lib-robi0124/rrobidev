function gradeToPass(exam1, exam2, exam3, exam4, exam5){
    if(exam1 !== Number(exam1) || exam2 !== Number(exam2) || exam3 !== Number(exam3) 
        || exam4 !== Number(exam4) || exam5 !== Number(exam5)){
        console.log("please enter a valid number between 6 and 10");            
    } else if(exam1 < 6 || exam2 < 6 || exam3 < 6 || exam4 < 6 || exam5 < 6){
        console.log("Please enter grade number bigger than 5"); 
    } else if(exam1 > 10 || exam2 > 10 || exam3 > 10 || exam4 > 10 || exam5 > 10){
        console.log("Please enter grade number lower than 11"); 
    } else {
        passGrade = (exam1 + exam2 + exam3 + exam4 + exam5) / 5;
        if(passGrade >= 8){
            console.log("Student pass");
        } else {
            console.log("Student fail");
        }
    }
    }

gradeToPass(10, 6, 8, 9, 6);
gradeToPass(10, 5, 8, 9, 6);
gradeToPass(10, 11, 8, 9, 6);
gradeToPass(10, tr, 8, 9, 6); 
// ne raboti bidejki go tretira kako varijabla koja nikade ne e deklarirana