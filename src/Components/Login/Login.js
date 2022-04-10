import { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import Data from "../../Context/Context";

export const Login = () => {
  const { setLoggedIn, setUser } = useContext(Data);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const login = async () => {
    await Auth.signIn(username, password)
      .then((user) => {
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          setLoggedIn(true);
          setUser(user);
          navigate("/changepassword");
        } else {
          setLoggedIn(true);
          setUser(user);
          navigate("/");
        }
      })
      .catch((error) => {
        error && setShowError(true);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <p className="sub-header" style={{ opacity: showError ? "1" : "0" }}>
          Incorrect username or password
        </p>
        <p className="paragraph">Username</p>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
            setShowError(false);
          }}
        />
        <p className="paragraph">Password</p>
        <input
          type="password"
          onKeyDown={(e) => (e.key === "Enter" ? login() : null)}
          onChange={(e) => {
            setPassword(e.target.value);
            setShowError(false);
          }}
        />
        <button className="button" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};
