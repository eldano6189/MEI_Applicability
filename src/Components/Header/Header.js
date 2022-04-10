import styles from "./Header.module.css";

import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import Data from "../../Context/Context";
import { REMEMI } from "../../Assets/SVG/REMEMI";
import { SignOut } from "../Sign-out/SignOut";
import { ThemeToggle } from "../Theme-toggle/ThemeToggle";

export const Header = () => {
  const location = useLocation();
  const { loggedIn, user } = useContext(Data);

  return (
    <header>
      <div className={styles.containerHeader}>
        <div className={styles.containerLogo}>
          <Link to="/">
            <div className={styles.logo}>
              <REMEMI />
            </div>
          </Link>
          <h4 className="header">1MI Bn, Inspection Applicability</h4>
        </div>
        {loggedIn && (
          <div className={styles.containerInfo}>
            {location.pathname === "/" ||
            location.pathname === "/login" ||
            location.pathname === "/changepassword" ? null : (
              <Link to="/">
                <button className="button">Back</button>
              </Link>
            )}
            <p className="paragraph">
              Logged in as : <span className="sub-header">{user.username}</span>
            </p>
            <SignOut />
          </div>
        )}
      </div>
      <div className={styles.containerToggle}>
        <ThemeToggle />
      </div>
    </header>
  );
};
