import styles from "./Header.module.css";
import { useContext } from "react";
import VehData from "../../Context/Context";

export const Header = () => {
  const { setSearch } = useContext(VehData);

  return (
    <header>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>
          <img src={require("../../Assets/Images/REME.png")} alt="Cap Badge" />
        </div>
        <h4 className="header">1MI Bn, Inspection Applicability</h4>
      </div>
      <div className={styles.containerSearch}>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search vehicle"
        />
      </div>
    </header>
  );
};
