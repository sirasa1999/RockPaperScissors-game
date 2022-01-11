//Let's play Rock, Paper, Scissors

let game=confirm("Shall we start playing Rock, Paper, Scissors?");

if (game){
    let playerChoice=prompt(" Rock, Paper, Scissors?");
    if (playerChoice) {
        let player=playerChoice.trim().toLowerCase();
        if (player === "rock" || player === "paper" || player === "scissors")
        {
            let computerChoice = Math.floor(Math.random()*3+1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";

        let result=
            player === computer ? `player: ${player} \n computer:  ${computer} \n It's a draw.`
            : player === "rock" && computer === "paper" 
            ? `player: ${player} \n computer:  ${computer} \n Computer wins!!!`
            : player === "scissors" && computer === "rock" 
            ? `player: ${player} \n computer:  ${computer} \n Computer wins!!!`
            : player === "paper" && computer === "scissors" 
            ? `player: ${player} \n computer:  ${computer} \n Computer wins!!!`
            : `player: ${player} \n computer:  ${computer} \n Player wins!!!` ;

        alert(result);
        let playAgain=confirm("Wanna play again?");
        playAgain ? location.reload() : alert ("Thank you for playing.");
        }
        else{
            alert("Invalid choice.")
        }
    }
    else{
        alert("You've cancelled the game.Play again next time.")
    }
}
else{
    alert("Invalid choice.Try again.");
}