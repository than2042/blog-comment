"use client";

import "./button.css";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

const Button = ({ children }) => {
  const { adding } = useFormStatus();
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <button disabled={adding} className={adding ? "disabled" : "button"}>
        {adding ? "Adding Yourpost" : children}
      </button>
    </motion.div>
  );
};

export default Button;
