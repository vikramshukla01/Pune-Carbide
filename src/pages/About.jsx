import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: "50px", backgroundColor: "#e8e8e8" }}
    >
      <h1>About Us</h1>
      <p>
        We are a team of passionate developers and marketers committed to delivering the best
        solutions for our clients.
      </p>
    </motion.section>
  );
};

export default About;
