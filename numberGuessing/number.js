const answer = Math.floor(Math.random() * 25) + 1; //get a random number between 1 to 25
document.getElementById("button").addEventListener("click",checkNumber);
document.getElementById("reset").addEventListener("click",refresh);

function checkNumber(){
    let guessNumber = document.getElementById("guess").value; //get the input number
    let status = document.getElementById("content"); //change text if they guess wrong or correct
    if(isNaN(guessNumber) == true){ // check if they type a number or something else
        alert("Please type in a number!"); //if they type something else, it will alert them
    } else if(guessNumber > 25 || guessNumber < 1) { //if they type in a number bigger than 25 or smaller than 1
        alert("Please type in a number between 1 and 25!");
    }else{
        if(guessNumber < answer){
            status.style.color = "red";
            status.innerText = "Guess higher";
        } else if(guessNumber > answer) {
            status.style.color = "red";
            status.innerText = "Guess smaller";
        } else{
            status.style.color = "green";
            status.innerText = "Correct guess!";
        }
    }
}
function refresh(){ //refresh the page if they want to play more
    location.reload();
}


