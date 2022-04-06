import styles from "./InfoPanel.module.css";

import { Landrover } from "../../../Assets/SVG/Landrover";
import { MAN } from "../../../Assets/SVG/Man";
import { TRL } from "../../../Assets/SVG/Trl";
import { FEPS } from "../../../Assets/SVG/FEPS";

export const InfoPanel = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>VRN:</p>
          <p className={`${styles.info} sub-header`}>{data.vrn}</p>
          <div className={styles.containerVehLogo}>
            <div className={styles.vehLogo}>
              {data.type === "LANDROVER" ? (
                <Landrover />
              ) : data.type === "MAN" ? (
                <MAN />
              ) : data.type === "TRL" ? (
                <TRL />
              ) : data.type === "FEPS" ? (
                <FEPS />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>NSN:</p>
          <p className={`${styles.info} sub-header`}>{data.nsn}</p>
          <p className={`${styles.label} paragraph`}>Description:</p>
          <p className={`${styles.info} sub-header`}>{data.desc}</p>
          <p className={`${styles.label} paragraph`}>Extra Info:</p>
          <p className={`${styles.info} sub-header`}>{data.info}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Engine No:</p>
          <p className={`${styles.info} sub-header`}>{data.engine}</p>
          <p className={`${styles.label} paragraph`}>Chassis No:</p>
          <p className={`${styles.info} sub-header`}>{data.chassis}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Class:</p>
          <p className={`${styles.info} sub-header`}>{data.class}</p>
          <p className={`${styles.label} paragraph`}>DTP:</p>
          <p className={`${styles.info} sub-header`}>{data.dtp}</p>
          <p className={`${styles.label} paragraph`}>RPC:</p>
          <p className={`${styles.info} sub-header`}>{data.rpc}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Common AESP:</p>
          <p className={`${styles.info} sub-header`}>{data.aesp}</p>
          <p className={`${styles.label} paragraph`}>Asset Code:</p>
          <p className={`${styles.info} sub-header`}>{data.ac}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>DGVW:</p>
          <p className={`${styles.info} sub-header`}>{data.dgvw} Kg</p>
          <p className={`${styles.label} paragraph`}>ULW:</p>
          <p className={`${styles.info} sub-header`}>{data.ulw} Kg</p>
        </div>
      </div>
    </div>
  );
};
