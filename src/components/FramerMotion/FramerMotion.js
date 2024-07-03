import React from 'react';
import { motion } from 'framer-motion';

const MotionWrapper = ({
  children,
  initial = "hidden",
  animate = "visible",
  exit = "hidden",
  variants,
  ...props
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
