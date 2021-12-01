import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Controller = ({ randomChoice, setPlayerChoice }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const paper = useTransform(x, [-168, 207, 0]);

  const checkPosition = (x, y) => {
    if (x > 400 && x < 600) {
      if (y > 800 && y < 1000) {
        setPlayerChoice("paper");
      }
    } else if (x > 600 && x < 700) {
      if (y > 300 && y < 500) {
        setPlayerChoice("rock");
      }
    } else if (x > 780 && x < 880) {
      if (y > 800 && y < 1000) {
        setPlayerChoice("scissors");
      }
    }
  };

  return (
    <motion.svg
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.8}
      whileDrag={{ scale: 1.5, opacity: "75%" }}
      style={{ x }}
      // onDragStart={() => randomChoice()}
      onDragEnd={(e) => checkPosition(e.x, e.y)}
      onDragStart={() => randomChoice()}
    >
      <circle
        cx='50%'
        cy='50%'
        r='50'
        fill='#736BFB'
        style={{ cursor: "grab", zIndex: 1000 }}
        // x={x}
        // y={y}
      />
    </motion.svg>
  );
};

export default Controller;
