import Button from "./Button";
import { useState } from "react";

function RockPaperScissors() {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundWinner, setRoundWinner] = useState("");
  // const [imageURL, setImageURL] = useState('');

  function playRound() {
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
      setComputerScore(playerScore + 1);
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
    setPlayerChoice("Rock");
    getRandomChoice();
    playRound();
  };

  const handlePaperClick = () => {
    setPlayerChoice("Paper");
    getRandomChoice();
    playRound();
  };

  const handleScissorsClick = () => {
    setPlayerChoice("Scissors");
    getRandomChoice();
    playRound();
  };

  return (
    <div className="flex-row">
      <div className="text-black text-xl mb-5">
        ROCK PAPER SCISSORS... SHOOT!!!
      </div>
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
        <div>Human: {playerChoice}</div>
        <div>Computer: {computerChoice}</div>
      </div>
      <div>Round Winner: {roundWinner}</div>
      <div>
        Score: {playerScore} - {computerScore}
      </div>
    </div>
  );
}

export default RockPaperScissors;
