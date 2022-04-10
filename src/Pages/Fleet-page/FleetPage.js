import styles from "./FleetPage.module.css";

import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Data from "../../Context/Context";
import { Vehicles } from "../../Data/Vehicles";
import { Card } from "../../Components/Card/Card";

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
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
      <ul className={styles.cardContainer} layout="position">
        {Vehicles.filter(
          (vrn) => vrn.vrn.includes(filter) || vrn.type.includes(filter)
        ).map((vehicle, index) => {
          return <Card data={vehicle} key={index} />;
        })}
      </ul>
    </motion.div>
  );
};
