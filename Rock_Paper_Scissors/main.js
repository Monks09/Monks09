// possible cases
// Computer  You
//   rock    paper --> you win
//   paper    rock --> you lose
//   paper    scissors --> you win
//   scissors    paper --> you lose
//   scissors    rock --> you win
//   rock    scissors --> you lose
//  if both same --> Match drawn


var options = ["rock", "paper", "scissors"]

function generateCompValue() {
    return Math.floor(Math.random() * 3);
}

function chooseRock() {
    var compValue = generateCompValue();
    var compOption = options[compValue];
    var yourOption = options[0];
    // console.log(compOption, yourOption);

    displaySelectedOption(compOption, yourOption);

    var result = generateResult(compOption, yourOption);
    // console.log(result);

    showResult(result);
}

function choosePaper() {
    var compValue = generateCompValue();
    var compOption = options[compValue];
    var yourOption = options[1];
    // console.log(compOption, yourOption);

    displaySelectedOption(compOption, yourOption);

    var result = generateResult(compOption, yourOption);
    // console.log(result);

    showResult(result);


}

function chooseScissors() {
    var compValue = generateCompValue();
    var compOption = options[compValue];
    var yourOption = options[2];
    // console.log(compOption, yourOption);

    displaySelectedOption(compOption, yourOption);

    var result = generateResult(compOption, yourOption);
    // console.log(result);

    showResult(result);
}

function generateResult(computer, you) {
    if (computer == you) {
        return null;
    }
    if (computer == "rock" && you == "paper") { return true }
    if (computer == "paper" && you == "scissors") { return true }
    if (computer == "scissors" && you == "rock") { return true }

    return false;
}

function showResult(result) {

    var resultHeading = document.getElementById("resultHeading");
    // console.log(resultHeading);

    if (result == true) {
        resultHeading.innerText = "Yayy, You win";
        resultHeading.style.color = "green";
    }
    else if (result == false) {
        resultHeading.innerText = "Sorry, You lose";
        resultHeading.style.color = "red";
    }
    else {
        resultHeading.innerText = "Match drawn, Please try again"
        resultHeading.style.color = "yellow";
    }
}

function displaySelectedOption(computer, you) {
    var computerImage = document.querySelector("#computer-option > img");
    // console.log(computerImage);
    if (computer == "rock") {
        computerImage.src = "./rock.png";
    }
    else if (computer == "paper") {
        computerImage.src = "./paper.png";
    }
    else {
        computerImage.src = "./scissors.png";
    }

    var yourImage = document.querySelector("#your-option > img");
    // console.log(yourImage);
    if (you == "rock") {
        yourImage.src = "./rock.png";
    }
    else if (you == "paper") {
        yourImage.src = "./paper.png";
    }
    else {
        yourImage.src = "./scissors.png";
    }

}