import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { VariantContext } from "../../src/context/variant.context";
import Loader from "./Loader";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  const { buttonVariants } = useContext(VariantContext);

  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
