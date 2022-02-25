import React from "react";
import { Heading, Box } from "@chakra-ui/react";

const BotChoice = ({ botChoice }) => (
  <Box position='static'>
    {botChoice ? (
      <Heading color='teal.500' fontSize='5rem' position='static'>
        {`${botChoice}`}
      </Heading>
    ) : (
      <Heading fontSize='5rem' position='static' opacity='0%'>
        HIDDEN
      </Heading>
    )}
  </Box>
);

export default BotChoice;
