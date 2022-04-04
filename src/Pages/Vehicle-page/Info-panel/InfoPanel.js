import styles from "./InfoPanel.module.css";
import { Landrover } from "../../../Assets/SVG/Landrover";
import { MAN } from "../../../Assets/SVG/Man";
import { TRL } from "../../../Assets/SVG/Trl";

export const InfoPanel = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>VRN:</p>
          <p className={`${styles.info} sub-header`}>{data.info.vrn}</p>
          <div className={styles.containerVehLogo}>
            <div className={styles.vehLogo}>
              {data.info.type === "LANDROVER" ? (
                <Landrover />
              ) : data.info.type === "MAN" ? (
                <MAN />
              ) : data.info.type === "TRL" ? (
                <TRL />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>NSN:</p>
          <p className={`${styles.info} sub-header`}>{data.info.nsn}</p>
          <p className={`${styles.label} paragraph`}>Description:</p>
          <p className={`${styles.info} sub-header`}>{data.info.desc}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Engine No:</p>
          <p className={`${styles.info} sub-header`}>{data.info.engine}</p>
          <p className={`${styles.label} paragraph`}>Chassis No:</p>
          <p className={`${styles.info} sub-header`}>{data.info.chassis}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Class:</p>
          <p className={`${styles.info} sub-header`}>{data.info.class}</p>
          <p className={`${styles.label} paragraph`}>DTP:</p>
          <p className={`${styles.info} sub-header`}>{data.info.dtp}</p>
          <p className={`${styles.label} paragraph`}>RPC:</p>
          <p className={`${styles.info} sub-header`}>{data.info.rpc}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>Common AESP:</p>
          <p className={`${styles.info} sub-header`}>{data.info.aesp}</p>
          <p className={`${styles.label} paragraph`}>Asset Code:</p>
          <p className={`${styles.info} sub-header`}>{data.info.ac}</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>DGVW:</p>
          <p className={`${styles.info} sub-header`}>{data.weights.dgvw} Kg</p>
          <p className={`${styles.label} paragraph`}>ULW:</p>
          <p className={`${styles.info} sub-header`}>{data.weights.ulw} Kg</p>
        </div>
      </div>
    </div>
  );
};
