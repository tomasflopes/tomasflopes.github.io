import { Heading } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React from "react";

const typewriter = keyframes`  
    from{width: 0;}
    to{width: 5em;}
    `;

const blinkTextCursor = keyframes`  
  from{border-right-color: rgba(255,255,255,.75);}
to{border-right-color: transparent;}
  `;

interface Props {
  text: string;
}

const AnimatedHeader: React.FC<Props> = ({ text }) => {
  const typewriterAnimation = `${typewriter} .8s steps(44) 1s 1 normal both, ${blinkTextCursor} .5s steps(22) 5 normal forwards`;

  return (
    <Heading
      as="h1"
      fontSize={"4xl"}
      my="2"
      animation={{ md: typewriterAnimation }}
      overflow="hidden"
      borderRight={{ md: "2px" }}
      whiteSpace="nowrap"
      w="100%"
      textAlign={{ base: "center", md: "left" }}
      borderColor="rgba(255,255,255,.75)"
    >
      {text}
    </Heading>
  );
};

export default AnimatedHeader;
