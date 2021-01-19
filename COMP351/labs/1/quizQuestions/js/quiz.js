function checkResults(){
    var count=0;
    var q1= document.questions.question1.value;
    var q2= document.questions.question2.value;
    var q3= document.questions.question3.value;
    var q4= document.questions.question4.value;
    var q5= document.questions.question5.value;
    var q6= document.questions.question6.value;
    //question1 check
    if(q1=="100,0"){
        result1.textContent= "Your answer is correct..... Correct Answer: c) 100,0";
        document.getElementById("result1").style.color="green";
    }
    else{
        result1.textContent="Wrong answer..... Correct Answer: c) 100,0";
        document.getElementById("result1").style.color="red";
   }
    //question2 check
    if(q2=="null or undefined"){
        result2.textContent= "Your answer is correct..... Correct Answer: b) null or undefined";
        document.getElementById("result2").style.color="green";
    }
    else{
        result2.textContent="Wrong answer..... Correct Answer: b) null or undefined";
        document.getElementById("result2").style.color="red";
   }
       //question3 check
   if(q3=="true"){
        result3.textContent= "Your answer is correct..... Correct Answer: a) true";
        document.getElementById("result3").style.color="green";
    }
    else{
        result3.textContent="Wrong answer..... Correct Answer: a) true";
        document.getElementById("result3").style.color="red";
   }
    //question4 check
   if(q4=="Syntax error"){
        result4.textContent= "Your answer is correct..... Correct Answer: d) Syntax error";
        document.getElementById("result4").style.color="green";
    }
    else{
        result4.textContent="Wrong answer..... Correct Answer: d) Syntax error";
        document.getElementById("result4").style.color="red";
   }
   //question5 check
   if(q5=="true"){
        result5.textContent= "Your answer is correct..... Correct Answer: a) true";
        document.getElementById("result5").style.color="green";
    }
   else{
        result5.textContent="Wrong answer..... Correct Answer: a) true";
        document.getElementById("result5").style.color="red";
    }
   //question6 check
    if(q6=="6"){
        result6.textContent= "Your answer is correct..... Correct Answer: b) 6";
        document.getElementById("result6").style.color="green";
    }
    else{
        result6.textContent="Wrong answer..... Correct Answer: b) 6";
        document.getElementById("result6").style.color="red";
   }
   }