document.getElementById("Mark").addEventListener("click", funkTion);

// Make a quiz
function funkTion() {

// counter for how many questions answered correctly.
let k = 0;


// Use if statements to make a passthrough for inputted text, should be relatively trivial compared to some of the assignments you've gotten.
// question 1
let question1 = document.getElementById("narniaQues").value.toLowerCase();
    if (question1 == "reepicheep") {
        document.getElementById("Answer1").innerHTML = "Correct"
        k++
    }   else{
            document.getElementById("Answer1").innerHTML = "Incorrect"
    }

// question 2
    let question2 = document.getElementById("thanosSnap").value.toLowerCase();
    if (question2 == "hawkeye") {
        document.getElementById("Answer2").innerHTML = "Correct"
        k++
    }   else{
            document.getElementById("Answer2").innerHTML = "Incorrect"
    }

// question 3
    let question3 = document.getElementById("hotFuzz").value.toLowerCase();
    if (question3 == "a cult") {
        document.getElementById("Answer3").innerHTML = "Correct"
        k++
    }   else{
            document.getElementById("Answer3").innerHTML = "Incorrect"
    }

// question 4
    let question4 = document.getElementById("lotrQues").value.toLowerCase();
    if (question4 == "the prancing pony") {
        document.getElementById("Answer4").innerHTML = "Correct"
        k++
    }   else{
            document.getElementById("Answer4").innerHTML = "Incorrect"
        }

// results & perecentage
    document.getElementById('Results').innerHTML = "" + k + "/4"
    document.getElementById('Percentage').innerHTML = "" + k / 4 * 100 + "%"

// feedback
    if (document.getElementById('Percentage').innerHTML == "100%"){
        document.getElementById('Feedback').innerHTML = "" + "Excellent job!"
        }else if (document.getElementById('Percentage').innerHTML == "75%"){
        document.getElementById('Feedback').innerHTML = "" + "Great job!"
            }else if (document.getElementById('Percentage').innerHTML == "50%"){
            document.getElementById('Feedback').innerHTML = "" + "Good job!"
                 }else if (document.getElementById('Percentage').innerHTML == "25%"){
                 document.getElementById('Feedback').innerHTML = "" + "Nice try, you can do it next time!"
                    }else{
                    document.getElementById('Feedback').innerHTML = "" + "You've got a lot of room for improvement."
        }
} 