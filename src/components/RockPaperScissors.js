import Button from "./Button";
import { useState } from "react";

function RockPaperScissors() {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundWinner, setRoundWinner] = useState("");

  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      setRoundWinner("Tie!");
    }
    if (
      (playerChoice === "Scissors" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Rock" && computerChoice === "Scissors")
    ) {
      setPlayerScore(playerScore + 1);
      setRoundWinner("Human - You Won!");
    }
    if (
      (computerChoice === "Scissors" && playerChoice === "Paper") ||
      (computerChoice === "Paper" && playerChoice === "Rock") ||
      (computerChoice === "Rock" && playerChoice === "Scissors")
    ) {
      setComputerScore(computerScore + 1);
      setRoundWinner("Computer - You Lost!");
    }
  };

  function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      setComputerChoice("Rock");
    }
    if (randomNumber === 1) {
      setComputerChoice("Paper");
    }
    if (randomNumber === 2) {
      setComputerChoice("Scissors");
    }
  };

  const handleRockClick = () => {
    getRandomChoice();
    setPlayerChoice("Rock");
    playRound(playerChoice, computerChoice);
  };

  const handlePaperClick = () => {
    getRandomChoice();
    setPlayerChoice("Paper");
    playRound(playerChoice, computerChoice);
  };

  const handleScissorsClick = () => {
    getRandomChoice();
    setPlayerChoice("Scissors");
    playRound(playerChoice, computerChoice);
  };

  return (
    <div className="flex-row">
      <div className="text-black text-xl mb-5">
        ROCK, PAPER, SCISSORS... SHOOT!!!
      </div>
      <div className="text-black-500 text-lg mb-5">Choose Your Weapon...</div>
      <div className="flex space-x-4 mb-5">
        <Button
          className="hover:bg-gray-600 hover:text-white"
          onClick={handleRockClick}
        >
          Rock
        </Button>
        <Button
          className="hover:bg-gray-600 hover:text-white"
          onClick={handlePaperClick}
        >
          Paper
        </Button>
        <Button
          className="hover:bg-gray-600 hover:text-white"
          onClick={handleScissorsClick}
        >
          Scissors
        </Button>
      </div>
      <div className="flex space-x-4">
        <div>Human: <span className="text-red-500">{playerChoice}</span></div>
        <div>Computer: <span className="text-red-500">{computerChoice}</span></div>
      </div>
      <div>Round Winner: <span className="text-red-500">{roundWinner}</span></div>
      <div>
        Score: <span className="text-red-500">{playerScore} - {computerScore}</span>
      </div>
    </div>
  );
}

export default RockPaperScissors;
