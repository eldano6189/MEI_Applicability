import styles from "./LoginPage.module.css";

import { motion } from "framer-motion";

import { REMEMI } from "../../Assets/SVG/REMEMI";
import { Login } from "../../Components/Login/Login";

export const LoginPage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Welcome to the 1MI Applicability Register
      </motion.h1>
      <motion.div
        initial={{ scale: 3, y: "12vh" }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className={styles.logo}
      >
        <REMEMI />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Login />
      </motion.div>
    </motion.div>
  );
};
