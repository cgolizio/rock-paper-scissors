import React from "react";
import { motion, useMotionValue } from "framer-motion";

const Controller = ({ randomChoice, setPlayerChoice, setShowCountdown }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const checkPosition = (x, y) => {
    // console.log("X: ", x, "Y: ", y);
    if (y < 850) {
      setPlayerChoice("rock");
    } else if (y > 850) {
      if (x < 750) {
        setPlayerChoice("paper");
      } else if (x > 750 && x < 1250) {
        setPlayerChoice("scissors");
      }
    }
    setShowCountdown(true);
  };

  return (
    <motion.svg
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.8}
      whileDrag={{ scale: 1.5, opacity: "75%" }}
      style={{ x }}
      onDragStart={() => randomChoice()}
      onDragEnd={(e) => checkPosition(e.x, e.y)}
    >
      <circle
        cx='50%'
        cy='50%'
        r='50'
        fill='#736BFB'
        style={{ cursor: "grab", zIndex: 1000 }}
        x={x}
        y={y}
      />
    </motion.svg>
  );
};

export default Controller;
