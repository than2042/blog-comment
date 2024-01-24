"use client";

import { motion } from "framer-motion";
import "./loading.css";

const Loading = () => {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 90, 90, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        backgroundColor: ["#0af", "rgba(216, 167, 13, 0.97)", "#fa0"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 0.9, 1],
        repeat: Infinity,
        repeatDelay: 9,
      }}
    />
  );
};

export default Loading;
