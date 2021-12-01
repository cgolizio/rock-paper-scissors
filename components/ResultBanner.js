import React, { useState, useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";

const ResultBanner = ({ result }) => {
  const [bannerColor, setBannerColor] = useState("slategray");

  useEffect(() => {
    switch (result) {
      case "YOU WIN!":
        setBannerColor("#0fa");
        break;
      case "You LOSE. Shame, shame...":
        setBannerColor("crimson");
        break;
      case "Its a draw!":
      default:
        setBannerColor("slategray");
        break;
    }
  }, [result]);

  return (
    <Flex
      w='100vw'
      bg={bannerColor}
      marginTop='40px'
      align='center'
      justify='center'
    >
      <Heading fontSize='4rem' color='ghostwhite'>
        {result}
      </Heading>
    </Flex>
  );
};

export default ResultBanner;
