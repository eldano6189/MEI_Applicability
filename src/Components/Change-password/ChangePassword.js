import styles from "./ChangePassword.module.css";
import { Auth } from "aws-amplify";
import { useState } from "react";

export const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <p className="paragraph">Old Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <p className="paragraph">New Password</p>
        <input
          type="password"
          onKeyDown={(e) => (e.key === "Enter" ? changePassword() : null)}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="button" onClick={changePassword}>
          Sign In
        </button>
      </div>
    </div>
  );
};
