import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import RockPaperScissors from "./RockPaperScissors";
import BotChoice from "../components/BotChoice";
import UserChoice from "../components/UserChoice";
import ResultBanner from "../components/ResultBanner";

export default function Home() {
  const [botChoice, setBotChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [countdown, setCountdown] = useState(3);
  const [countdownLabel, setCountdownLabel] = useState("");
  const [showCountdown, setShowCountdown] = useState(false);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const choices = ["rock", "paper", "scissors"];
  const randomChoice = () => {
    setShowResult(false);
    setBotChoice("");
    setPlayerChoice("");
    // setPlayerChoice(() => (playerChoice.length ? playerChoice : ""));
    setResult("");
    // setShowCountdown(true);
    setTimeout(() => {
      setShowCountdown(false);
      setBotChoice(choices[Math.floor(Math.random() * choices.length)]);
    }, 4000);
  };

  useEffect(() => {
    if (showCountdown) {
      if (countdown > 0) {
        setTimeout(() => setCountdown(countdown - 1), 1000);
      }
    }
    if (
      (!showCountdown && countdown === 0) ||
      (!showCountdown && countdown === "Shoot!")
    ) {
      setCountdown(3);
    }
    if (showCountdown && countdown === 0) {
      setCountdown("Shoot!");
    }
  }, [countdown, showCountdown]);

  useEffect(() => {
    if (showCountdown) {
      switch (countdown) {
        case 3:
          setCountdownLabel("Rock.");
          break;
        case 2:
          setCountdownLabel("Paper.");
          break;
        case 1:
          setCountdownLabel("Scissors.");
          break;
        case "Shoot!":
          setCountdownLabel("SHOOT!");
          break;
        default:
          setCountdownLabel("");
          break;
      }
    }
  }, [countdown, countdownLabel, showCountdown]);

  useEffect(() => {
    if (playerChoice.length && botChoice.length && !showCountdown) {
      switch (playerChoice + botChoice) {
        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
          setTimeout(() => {
            setResult("YOU WIN!");
            setShowResult(true);
          }, 1000);
          break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          setTimeout(() => {
            setResult("You LOSE. Shame, shame...");
            setShowResult(true);
          }, 1000);
          break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
          setTimeout(() => {
            setResult("Its a draw!");
            setShowResult(true);
          }, 1000);
          break;
      }
    }
  }, [playerChoice, botChoice, showCountdown]);

  return (
    <>
      <Flex flexDir='row' align='center' justify='space-evenly'>
        <UserChoice playerChoice={playerChoice} />
        <BotChoice botChoice={botChoice} />
      </Flex>
      <Flex justify='center' align='center' flexDir='column'>
        {/* <button onClick={() => randomChoice()}>Start Game</button> */}
        {showCountdown ? (
          <Heading fontSize='2rem'>{countdownLabel}</Heading>
        ) : null}
        {showResult ? <ResultBanner result={result} /> : null}
      </Flex>
      <Flex
        h='80vh'
        align='center'
        justify='center'
        pos='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <RockPaperScissors
          randomChoice={randomChoice}
          setPlayerChoice={setPlayerChoice}
          setShowCountdown={setShowCountdown}
        />
      </Flex>
    </>
  );
}
