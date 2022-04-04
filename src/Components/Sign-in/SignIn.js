import { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

import styles from "./SignIn.module.css";
import Data from "../../Context/Context";

export const SignIn = () => {
  const { setLoggedIn, setUser } = useContext(Data);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const signIn = async () => {
    try {
      await Auth.signIn(username, password);
      setLoggedIn(true);
      navigate("/");
      setUser(username);
    } catch (error) {
      console.log("error signing in", error);
      setLoginMessage("Incorrect username or password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className="sub-header">{loginMessage}</h2>
        <p className="paragraph">Username</p>
        <input
          type="text"
          onKeyDown={(e) => (e.key === "Enter" ? signIn() : null)}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="paragraph">Password</p>
        <input
          type="password"
          onKeyDown={(e) => (e.key === "Enter" ? signIn() : null)}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};
