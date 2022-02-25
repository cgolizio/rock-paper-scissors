import React from "react";
import { Flex, Center, Heading } from "@chakra-ui/react";

import BotChoice from "../components/BotChoice";
import UserChoice from "../components/UserChoice";

const ChoiceContainer = ({ botChoice, playerChoice }) => {
  return (
    <Center>
      <Flex
        bg='transparent'
        flexDir='row'
        align='center'
        justify='space-between'
        p={55}
        w='75vw'
      >
        <Flex flexDir='column' align='center' justify='space-between' h='100%'>
          <Heading paddingRight='12px'>You chose: </Heading>
          <UserChoice playerChoice={playerChoice} />
        </Flex>
        <Flex flexDir='column' align='center' justify='space-between' h='100%'>
          <Heading paddingRight='12px'>RPS bot chooses: </Heading>
          <BotChoice botChoice={botChoice} />
        </Flex>
      </Flex>
    </Center>
  );
};

export default ChoiceContainer;
