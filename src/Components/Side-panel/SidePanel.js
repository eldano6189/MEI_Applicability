import styles from "./SidePanel.module.css";
import { Vehicles } from "../../Data/Vehicles";
import { useContext } from "react";
import VehData from "../../Context/Context";

export const SidePanel = () => {
  const { setSearch } = useContext(VehData);

  return (
    <header>
      <div className={styles.containerLogo}>
        <h1>1 MI Bn</h1>
        <div className={styles.logo}></div>
        <h2>Inspections</h2>
      </div>
      <div className={styles.containerSearch}>
        <select
          name="VRN"
          id="VRN"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        >
          {Vehicles.map((vehicle, index) => {
            return (
              <option key={index} value={vehicle.info.vrn}>
                {vehicle.info.vrn}
              </option>
            );
          })}
        </select>
      </div>
    </header>
  );
};
