import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div style={{ paddingTop: "100px", textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Home Page
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        This is the Home Page of your website.
      </motion.p>
    </div>
  );
};

export default Home;
