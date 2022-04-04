import styles from "./Header.module.css";
import { useContext } from "react";
import Data from "../../Context/Context";
import { SignOut } from "../Sign-out/SignOut";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const { loggedIn } = useContext(Data);

  return (
    <header>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>
          <img src={require("../../Assets/Images/REME.png")} alt="Cap Badge" />
        </div>
        <h4 className="header">1MI Bn, Inspection Applicability</h4>
      </div>
      <div className={styles.containerSearch}>
        {location.pathname === "/" || location.pathname === "/login" ? null : (
          <Link to="/">
            <button className="button">Home</button>
          </Link>
        )}

        {loggedIn ? <SignOut /> : null}
      </div>
    </header>
  );
};
