import styles from "./FleetPage.module.css";

import { Link } from "react-router-dom";
import { useContext } from "react";

import Data from "../../Context/Context";
import { Vehicles } from "../../Data/Vehicles";
import { Landrover } from "../../Assets/SVG/Landrover";
import { MAN } from "../../Assets/SVG/Man";
import { TRL } from "../../Assets/SVG/Trl";
import { FEPS } from "../../Assets/SVG/FEPS";

export const FleetPage = () => {
  const { user } = useContext(Data);

  return (
    <div className={styles.container}>
      <h1 className="header">Welcome {user}</h1>
      <p className="sub-header">
        Select a vehicle from the list and you
        <br />
        will be directed to the vehicle specific information.
      </p>
      <ul className={styles.cardContainer}>
        {Vehicles.map((vehicle, index) => {
          return (
            <li key={index} className={styles.card}>
              <Link to={`/${vehicle.vrn}`}>
                <div className={styles.wrapper}>
                  <p className={`${styles.label} paragraph`}>VRN:</p>
                  <h2 className={`${styles.info} sub-header`}>{vehicle.vrn}</h2>
                  <div className={styles.imageContainer}>
                    {vehicle.type === "LANDROVER" ? (
                      <Landrover />
                    ) : vehicle.type === "MAN" ? (
                      <MAN />
                    ) : vehicle.type === "TRL" ? (
                      <TRL />
                    ) : vehicle.type === "FEPS" ? (
                      <FEPS />
                    ) : null}
                  </div>
                  <p className="paragraph">{vehicle.info}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
