import styles from "./LoginPage.module.css";

import { Login } from "../../Components/Login/Login";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="header">Welcome to the 1MI Applicability Register</h1>
      <div className={styles.logo}>
        <img src={require("../../Assets/Images/REME.png")} alt="Cap Badge" />
      </div>
      <Login />
    </div>
  );
};
