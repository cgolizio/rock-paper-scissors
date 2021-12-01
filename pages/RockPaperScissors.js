import React from "react";
import { Flex, HStack } from "@chakra-ui/react";
import Rock from "../components/Rock";
import Paper from "../components/Paper";
import Scissors from "../components/Scissors";
import Controller from "../components/Controller";

const RockPaperScissors = ({ randomChoice, setPlayerChoice }) => {
  return (
    <Flex h='50vh' flexDir='column' justify='space-evenly' align='center'>
      <Rock />
      <Controller
        randomChoice={randomChoice}
        setPlayerChoice={setPlayerChoice}
      />
      <Flex flexDir='row' align='center' justify='center'>
        <HStack spacing='12rem'>
          <Paper />
          <Scissors />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default RockPaperScissors;
