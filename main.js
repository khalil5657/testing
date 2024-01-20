let turn = 0;
const lista = ["rock", "paper", "scisor"];
let playerscore = 0;
let compscore = 0;
while (turn < 5){
    startGame();

}
alert(`Player score: ${playerscore} Computer score ${compscore}`);
function startGame(){
    let playerChoice = prompt("choose ").toLowerCase();
    let compChoice = lista[Math.floor(Math.random()*lista.length)];
    if (playerChoice === compChoice){
        startGame();
    }else if (playerChoice === "rock" && compChoice === "scisor"){
        console.log(`player choosed ${playerChoice} computer choosed ${compChoice} Player won!`);
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