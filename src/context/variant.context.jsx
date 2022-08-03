import { createContext, useState } from "react";
import React from "react";

export const VariantContext = createContext({
  containerVariants: {},
  buttonVariants: {},
});

export const VariantProvider = ({ children }) => {
  const [containerVariants, setContainerVariants] = useState({
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
      exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" },
      },
    },
  });

  const [buttonVariants, SetButtonVariants] = useState({
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  });

  const value = { containerVariants, buttonVariants };
  return (
    <VariantContext.Provider value={value}>{children}</VariantContext.Provider>
  );
};
