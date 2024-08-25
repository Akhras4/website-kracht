import React, { useState, ReactNode, ReactElement , isValidElement } from 'react';
import { motion } from 'framer-motion';

type Direction = 1 | -1;

interface SliderProps {
  children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const childrenArray = React.Children.toArray(children);

  const forwardSection = () => {
    setDirection(1);
    setActiveSection((prevSection) => prevSection < childrenArray.length - 1 ? (prevSection + 1):prevSection);
  };

  const backwardSection = () => {
    setDirection(-1);
    setActiveSection((prevSection) => prevSection > 0 ? (prevSection - 1):prevSection);
  };

  const variants = {
    enter: (direction: Direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: Direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <>
       {React.Children.map(children, (child, index) => 
        index === activeSection ? (
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 50 },
              opacity: { duration: 2 },
            }}
            style={{
            }}
          >
            {isValidElement(child)
              ? React.cloneElement(child as ReactElement<any>, { forwardSection, backwardSection,activeSection:activeSection+1,childrenCount: childrenArray.length })
              : child}
          </motion.div>
        ) : null
      )}
    </>
  );
};

export default Slider;

