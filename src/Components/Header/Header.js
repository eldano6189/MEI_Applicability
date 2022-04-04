import styles from "./Header.module.css";
import { useContext } from "react";
import Data from "../../Context/Context";
import { SignOut } from "../Sign-out/SignOut";

export const Header = () => {
  const { setSearch, loggedIn } = useContext(Data);

  return (
    <header>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>
          <img src={require("../../Assets/Images/REME.png")} alt="Cap Badge" />
        </div>
        <h4 className="header">1MI Bn, Inspection Applicability</h4>
      </div>
      <div className={styles.containerSearch}>
        {loggedIn ? (
          <>
            <SignOut />
            <input
              onKeyDown={(e) =>
                e.key === "Enter" ? setSearch(e.target.value) : null
              }
              type="text"
              placeholder="Search vehicle"
            />
          </>
        ) : null}
      </div>
    </header>
  );
};
