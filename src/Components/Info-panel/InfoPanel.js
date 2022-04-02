import styles from "./InfoPanel.module.css";
import { useContext } from "react";
import VehData from "../../Context/Context";

export const InfoPanel = () => {
  const { veh } = useContext(VehData);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>VRN:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.vrn}</p>
          <div className={styles.containerVehLogo}>
            <div className={styles.vehLogo}>
              <div className={styles.wrapper}>
                {veh.info.type === "LANDROVER" ? (
                  <img
                    src={require("../../Assets/Images/LR.png")}
                    alt={veh.info.type}
                  />
                ) : veh.info.type === "MAN" ? (
                  <img
                    src={require("../../Assets/Images/MAN.png")}
                    alt={veh.info.type}
                  />
                ) : veh.info.type === "TRL" ? (
                  <img
                    src={require("../../Assets/Images/MAN.png")}
                    alt={veh.info.type}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>NSN:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.nsn}</p>
          <p className={`${styles.label} paragraph`}>Description:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.desc}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Engine No:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.engine}</p>
          <p className={`${styles.label} paragraph`}>Chassis No:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.chassis}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Class:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.class}</p>
          <p className={`${styles.label} paragraph`}>DTP:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.dtp}</p>
          <p className={`${styles.label} paragraph`}>RPC:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.rpc}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Common AESP:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.aesp}</p>
          <p className={`${styles.label} paragraph`}>Asset Code:</p>
          <p className={`${styles.info} sub-header`}>{veh.info.ac}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>DGVW:</p>
          <p className={`${styles.info} sub-header`}>{veh.weights.dgvw} Kg</p>
          <p className={`${styles.label} paragraph`}>ULW:</p>
          <p className={`${styles.info} sub-header`}>{veh.weights.ulw} Kg</p>
        </div>
      </div>
    </div>
  );
};
