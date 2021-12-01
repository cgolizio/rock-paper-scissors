import React from "react";
import { Flex, Heading, HStack } from "@chakra-ui/react";

const UserChoice = ({ playerChoice }) => {
  return (
    <Flex align='center' justify='center' marginTop='3rem'>
      {playerChoice && (
        <HStack spacing='.25rem'>
          <Heading>{"You chose "}</Heading>
          <Heading color='#736BFB' fontSize='3rem'>{`${playerChoice}`}</Heading>
        </HStack>
      )}
    </Flex>
  );
};

export default UserChoice;
