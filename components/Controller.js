import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const Controller = ({
  randomChoice,
  setPlayerChoice,
  playerChoice,
  setShowCountdown,
  showResult,
}) => {
  const [positions, setPositions] = useState("");
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const checkPosition = async (x, y) => {
    if (y < 850) {
      setPlayerChoice("rock");
      setPositions("0px, -242px, 0px");
    } else if (y > 850) {
      if (x < 750) {
        setPlayerChoice("paper");
        setPositions("-167px, 248px, 0px");
      } else if (x > 750 && x < 1250) {
        setPlayerChoice("scissors");
        setPositions("147px, 248px, 0px");
      }
    }
    await setShowCountdown(true);
  };

  useEffect(() => {
    showResult &&
      setTimeout(() => {
        setPositions("0px, 0px, 0px");
      }, 1000);
  }, [showResult]);

  useEffect(() => {
    console.log("PLAYER CHOICE", playerChoice);
  }, [playerChoice]);

  return (
    <motion.svg
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.8}
      whileDrag={{ scale: 1.5, opacity: "75%" }}
      style={{ overflow: "visible" }}
      onDragStart={() => randomChoice()}
      onDragEnd={(e) => checkPosition(e.x, e.y)}
      dragPropagation={true}
    >
      <circle
        cx='50%'
        cy='50%'
        r='50'
        fill='#736BFB'
        style={{
          cursor: "grab",
          zIndex: 1000,
          transform: `translate3d(${positions})`,
        }}
        x={x}
        y={y}
      />
    </motion.svg>
  );
};

export default Controller;
