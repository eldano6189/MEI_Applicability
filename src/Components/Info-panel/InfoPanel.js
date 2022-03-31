import styles from "./InfoPanel.module.css";
import { useContext } from "react";
import VehData from "../../Context/Context";

export const InfoPanel = () => {
  const { veh } = useContext(VehData);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>{veh.info.vrn}</div>
        <div className={styles.item}>
          {veh.info.nsn}
          {veh.info.desc}
        </div>
        <div className={styles.item}>
          {veh.info.engine}
          {veh.info.chassis}
        </div>
        <div className={styles.item}>
          {veh.info.class}
          {veh.info.dtp}
        </div>
        <div className={styles.item}>
          {veh.info.aesp}
          {veh.info.ac}
        </div>
        <div className={styles.item}>{veh.weights.dgvw}</div>
      </div>
    </div>
  );
};
