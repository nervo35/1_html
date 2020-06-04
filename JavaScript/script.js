// Challenge 1: Age in Days
function ageInDays() {
  var birthyear = prompt("What is your birthyear my friend");
  var days = (2018 - birthyear) * 365;
  var h4 = document.createElement("h4"); // Create a h4 elemet
  var age = document.createTextNode("You are " + days + " days old"); //Create Text
  h4.setAttribute("id", "ageInDays");
  h4.appendChild(age);
  document.getElementById("flex-box-result").appendChild(h4);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challange 2: Cat Generator
function generateBike() {
  var image = document.createElement("img"); //Create image element
  var div = document.getElementById("flex-bike-gen"); // get the flex box of the given ID
  image.src = "./Images/red.jpg"; //The item to put in the flex box
  div.appendChild(image); // not only 1 item to put, but put multiple items in
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
  // console.log("You Picked: ", yourChoice.id);

  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  // console.log("Computer Choice: ", botChoice);

  var results = decideWinner(humanChoice, botChoice); //[1,0] i.e human won or[0.5, 0.5] i.e draw
  // console.log(results);

  var message = finalMessage(results); // {message: 'you won' color: "green"} this returns an object
  // console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message); // how the final message screen will look
}

function randToRpsInt() {
  return Math.floor(Math.random() * 5); // Math.randon() selects random numbers between 0 & 1. Multiplying it by 5 will selct numbers between 0 & 4. Math.floor() coverts the value to its base number
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors", "lizard", "spock"][number]; // this will select the 'number'th object from the items list
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, lizard: 1, rock: 0.5, paper: 0, spock: 0 }, // who
    paper: { rock: 1, spock: 1, paper: 0.5, scissors: 0, lizard: 0 }, // beats
    scissors: { paper: 1, lizard: 1, scissors: 0.5, rock: 0, spock: 0 }, // who
    lizard: { paper: 1, spock: 1, lizard: 0.5, rock: 0, scissors: 0 },
    spock: { rock: 1, scissors: 1, spock: 0.5, paper: 0, lizard: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost!!!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "Draw!!!", color: "darkgrey" };
  } else {
    return { message: "You Won!!!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src, // getting
    paper: document.getElementById("paper").src, // the
    scissors: document.getElementById("scissors").src, // imgaes
    lizard: document.getElementById("lizard").src, // sources
    spock: document.getElementById("spock").src,
  };

  // Remove the Images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();
  document.getElementById("lizard").remove();
  document.getElementById("spock").remove();

  var humanDiv = document.createElement("div"); // creating
  var botDiv = document.createElement("div"); // div
  var messageDiv = document.createElement("div"); // for the elements

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"; // img src + attributes + glow
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(233,37,50,1)'>"; // img src + attributes + glow
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage["message"] +
    "</h1"; // you won(in green color) + attributes

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 4: BlackJack
let blackjackGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#deresultbox",
    score: 0,
  },
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("JS/sounds/swish.m4a");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

function blackjackHit() {
  let cardImage = document.createElement("img");
  cardImage.src = "JS/Images/2.png";
  document.querySelector(YOU["div"]).appendChild(cardImage);
}
