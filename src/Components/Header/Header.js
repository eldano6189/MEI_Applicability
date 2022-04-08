import styles from "./Header.module.css";

import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import Data from "../../Context/Context";
import { SignOut } from "../Sign-out/SignOut";

export const Header = () => {
  const location = useLocation();
  const { loggedIn, user } = useContext(Data);

  return (
    <header>
      <div className={styles.containerLogo}>
        <Link to="/">
          <div className={styles.logo}>
            <img
              src={require("../../Assets/Images/REME.png")}
              alt="Cap Badge"
            />
          </div>
        </Link>
        <h4 className="header">1MI Bn, Inspection Applicability</h4>
      </div>
      <div className={styles.containerSearch}>
        {location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/changepassword" ? null : (
          <Link to="/">
            <button className="button">Back</button>
          </Link>
        )}
        {loggedIn ? (
          <p className="paragraph">
            Logged in as : {`${user.username} ${user.attributes.name}`}
          </p>
        ) : null}
        {loggedIn ? <SignOut /> : null}
      </div>
    </header>
  );
};
