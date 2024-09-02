import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import './light.css'

interface LightProps extends MotionProps {
  id: string;
  className?: string;
}

const Light: React.FC<LightProps> = ({
  id,
  className,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.div
      id={id}
      className={`absolute w-64 h-64 rounded-full ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    />
  );
};

export default Light;
