import styles from "./FleetPage.module.css";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Data from "../../Context/Context";
import { Vehicles } from "../../Data/Vehicles";
import { Landrover } from "../../Assets/SVG/Landrover";
import { MAN } from "../../Assets/SVG/Man";
import { TRL } from "../../Assets/SVG/Trl";
import { FEPS } from "../../Assets/SVG/FEPS";

export const FleetPage = () => {
  const { user } = useContext(Data);
  const [filter, setFilter] = useState([]);

  const [landrover, setLandrover] = useState(0);
  const [man, setMan] = useState(0);
  const [trl, setTrl] = useState(0);
  const [feps, setFeps] = useState(0);

  const getVehTotals = (platform) =>
    Vehicles.reduce((acc, val) => {
      return acc + (val.type === platform);
    }, 0);

  useEffect(() => {
    setLandrover(getVehTotals("LANDROVER"));
    setMan(getVehTotals("MAN"));
    setTrl(getVehTotals("TRL"));
    setFeps(getVehTotals("FEPS"));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="header">Welcome {user.username}</h1>
      <p className="sub-header">
        Select a vehicle from the list and you
        <br />
        will be directed to the vehicle specific information.
      </p>
      <input
        className={styles.searchbox}
        type="text"
        placeholder="Search VRN"
        onChange={(e) => setFilter(e.target.value.toUpperCase())}
      />
      <div className={styles.containerButtons}>
        <button className="button" onClick={() => setFilter([])}>
          All ({Vehicles.length})
        </button>
        <button
          className="button"
          onClick={() => setFilter("landrover".toUpperCase())}
        >
          Landrover ({landrover})
        </button>
        <button
          className="button"
          onClick={() => setFilter("man".toUpperCase())}
        >
          MAN ({man})
        </button>
        <button
          className="button"
          onClick={() => setFilter("trl".toUpperCase())}
        >
          TRL ({trl})
        </button>
        <button
          className="button"
          onClick={() => setFilter("feps".toUpperCase())}
        >
          FEPS ({feps})
        </button>
      </div>
      <ul className={styles.cardContainer}>
        {Vehicles.filter(
          (vrn) => vrn.vrn.includes(filter) || vrn.type.includes(filter)
        ).map((vehicle, index) => {
          return (
            <li key={index} className={styles.card}>
              <Link to={`/${vehicle.vrn}`}>
                <div className={styles.wrapper}>
                  <p className={`${styles.label} paragraph`}>VRN:</p>
                  <h2 className={`${styles.info} sub-header`}>{vehicle.vrn}</h2>
                  <div className={styles.imageContainer}>
                    <p className={`${styles.infoText} paragraph`}>
                      {vehicle.info}
                    </p>
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
                  <p className="paragraph">{vehicle.desc}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
