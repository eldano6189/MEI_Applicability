import styles from "./DetailedView.module.css";
import { useContext } from "react";
import Data from "../../../Context/Context";
import { Landrover } from "../../../Data/932/Landrover";
import { All } from "../../../Data/933/All";

export const DetailedView = () => {
  const { veh } = useContext(Data);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headers}>
          <h3 className="header">932 Applicability</h3>
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.number}>
            {veh.info.type === "LANDROVER"
              ? Landrover.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.im}</p>
                    </li>
                  );
                })
              : null}
          </ul>

          <ul className={styles.applicable}>
            {veh.info.type === "LANDROVER"
              ? veh.mot.map((vehicle, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        backgroundColor:
                          vehicle === "y" || vehicle === "ex"
                            ? "hsl(var(--fc2))"
                            : null,
                      }}
                    >
                      <p className="sub-header">{vehicle}</p>
                    </li>
                  );
                })
              : null}
          </ul>

          <ul className={styles.description}>
            {veh.info.type === "LANDROVER"
              ? Landrover.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.desc}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.headers}>
          <h3 className="header">933 Applicability</h3>
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.number}>
            {veh.info.type !== ""
              ? All.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.im}</p>
                    </li>
                  );
                })
              : null}
          </ul>

          <ul className={styles.applicable}>
            {veh.info.type !== ""
              ? veh.operational.map((vehicle, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        backgroundColor:
                          vehicle === "y" || vehicle === "ex"
                            ? "hsl(var(--fc2))"
                            : null,
                      }}
                    >
                      <p className="sub-header">{vehicle}</p>
                    </li>
                  );
                })
              : null}
          </ul>

          <ul className={styles.description}>
            {veh.info.type !== ""
              ? All.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.desc}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};
