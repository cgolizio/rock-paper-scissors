import React from "react";
import { Flex, Heading, HStack } from "@chakra-ui/react";

const BotChoice = ({ botChoice }) => {
  return (
    <Flex align='center' justify='center' marginTop='3rem'>
      {botChoice && (
        <HStack spacing='.25rem'>
          <Heading>{"RPS Bot chooses "}</Heading>
          <Heading color='darkgray' fontSize='3rem'>{`${botChoice}`}</Heading>
        </HStack>
      )}
    </Flex>
  );
};

export default BotChoice;
