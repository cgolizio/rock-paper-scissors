import React from "react";
import { Heading, Box } from "@chakra-ui/react";

const UserChoice = ({ playerChoice }) => (
  <Box position='static'>
    {playerChoice ? (
      <Heading color='#736BFB' fontSize='5rem' position='static'>
        {`${playerChoice}`}
      </Heading>
    ) : (
      <Heading fontSize='5rem' position='static' opacity='0%'>
        HIDDEN
      </Heading>
    )}
  </Box>
);

export default UserChoice;
