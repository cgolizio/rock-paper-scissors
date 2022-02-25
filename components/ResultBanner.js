import React, { useState, useEffect } from "react";
import { Heading, Box } from "@chakra-ui/react";

const ResultBanner = ({ result }) => {
  const [bannerColor, setBannerColor] = useState("slategray");

  useEffect(() => {
    console.log("BANNER COLOR: ", bannerColor);
  }, [bannerColor]);

  useEffect(() => {
    switch (result) {
      case "Nice job, you won /s. RPS bot literally hates you now.":
        setBannerColor("green.300");
        break;
      case "YOU LOOOOOOSSSSSEEE **super loud buzzer noise**":
        setBannerColor("red.600");
        break;
      case "Its a draw!":
      default:
        setBannerColor("slategray");
        break;
    }
  }, [result]);

  return (
    <Box h='100vh' w='100vw' bg={bannerColor} textAlign='center'>
      <Heading fontSize='4rem' color='ghostwhite' p={100}>
        {result}
      </Heading>
    </Box>
  );
};

export default ResultBanner;
