let turn = 0;
const lista = ["rock", "paper", "scisor"];
let playerscore = 0;
let compscore = 0;
// while (turn < 5){
//     startGame();

// }
// alert(`Player score: ${playerscore} Computer score ${compscore} WOHOO`);
function startGame(playerChoice){
    // let playerChoice = prompt("choose ").toLowerCase();
    let compChoice = lista[Math.floor(Math.random()*lista.length)];
    if (playerChoice === compChoice){
        startGame();
    }else if (playerChoice === "rock" && compChoice === "scisor"){
        // console.log(`player choosed ${playerChoice} computer choosed ${compChoice} Player won!`);
        let 
        playerscore++;
        turn++;
    }else if (playerChoice === "paper" && compChoice === "rock"){
        console.log(`player choosed ${playerChoice} computer choosed ${compChoice} Player won!`);
        playerscore++;

        turn++;
    }else if (playerChoice=== "scisor" && compChoice==="paper"){
        console.log(`player choosed ${playerChoice} computer choosed ${compChoice} Player won!`);
        playerscore++;
        turn++;
    }else{
        console.log(`player choosed ${playerChoice} computer choosed ${compChoice} computer won!`)
        compscore++;
        turn++;
    }
    
    
}
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scisor = document.querySelector(".scisor");
const div = document.querySelector("results");

rock.addEventListener("click", function () {
    startGame("rock");
  });
paper.addEventListener("click", function () {
    startGame("paper");
  });
scisor.addEventListener("click", function () {
    startGame("scisor");
  });;