import { useState, useContext, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

import styles from "./ChangePassword.module.css";
import Data from "../../Context/Context";

export const ChangePassword = () => {
  const { user } = useContext(Data);
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [finalPassword, setFinalPassword] = useState("");

  const condition = newPassword === confirmPassword && finalPassword !== "";

  const changePassword = async () => {
    await Auth.completeNewPassword(user, finalPassword).then(navigate("/"));
  };

  useEffect(() => {
    newPassword === confirmPassword
      ? setFinalPassword(confirmPassword)
      : setFinalPassword("");
  }, [newPassword, confirmPassword]);

  return (
    <div className={styles.container}>
      <h2 className="header">Please change your password</h2>
      <p className="paragraph">
        Your password will only require changing on inital login of the account.
        <br />
        Your password can be any combination of digits and numbers you wish,
        however you will only be able to confirm the password if they match.
      </p>
      <div className={styles.form}>
        <p className="paragraph">New Password</p>
        <input
          style={{
            border: condition
              ? "3px solid hsl(var(--fc2))"
              : "3px solid transparent",
          }}
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <p className="paragraph">Confirm Password</p>
        <input
          style={{
            border: condition
              ? "3px solid hsl(var(--fc2))"
              : "3px solid transparent",
          }}
          type="password"
          onKeyDown={
            condition
              ? (e) => (e.key === "Enter" ? changePassword() : null)
              : null
          }
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="button"
          style={{
            opacity: condition ? "1" : "0.2",
            pointerEvents: condition ? null : "none",
          }}
          onClick={condition ? changePassword : null}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
