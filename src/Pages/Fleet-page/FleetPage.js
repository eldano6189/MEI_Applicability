import styles from "./FleetPage.module.css";
import { Vehicles } from "../../Data/Vehicles";
import { useContext } from "react";
import Data from "../../Context/Context";

import { Landrover } from "../../Assets/SVG/Landrover";
import { MAN } from "../../Assets/SVG/Man";
import { TRL } from "../../Assets/SVG/Trl";
import { Link } from "react-router-dom";

export const FleetPage = () => {
  const { user } = useContext(Data);

  return (
    <div className={styles.container}>
      <h1 className="header">Welcome {user}</h1>
      <p className="sub-header">
        Select a vehicle from the list and you
        <br />
        will be directed the the vehicle specific information.
      </p>
      <ul className={styles.cardContainer}>
        {Vehicles.map((vehicle, index) => {
          return (
            <li key={index} className={styles.card}>
              <Link to={`/${vehicle.info.vrn}`}>
                <div className={styles.wrapper}>
                  <p className={`${styles.label} paragraph`}>VRN:</p>
                  <h2 className={`${styles.info} sub-header`}>
                    {vehicle.info.vrn}
                  </h2>
                  <div className={styles.imageContainer}>
                    {vehicle.info.type === "LANDROVER" ? (
                      <Landrover />
                    ) : vehicle.info.type === "MAN" ? (
                      <MAN />
                    ) : vehicle.info.type === "TRL" ? (
                      <TRL />
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
