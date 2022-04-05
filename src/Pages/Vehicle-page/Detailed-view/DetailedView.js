import styles from "./DetailedView.module.css";

import { Landrover } from "../../../Data/932/Landrover";
import { AllOthers } from "../../../Data/932/AllOthers";
import { All } from "../../../Data/933/All";

export const DetailedView = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headers}>
          <h3 className="header">932 Applicability</h3>
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.number}>
            {data.type === "LANDROVER"
              ? Landrover.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.im}</p>
                    </li>
                  );
                })
              : AllOthers.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.im}</p>
                    </li>
                  );
                })}
          </ul>

          <ul className={styles.applicable}>
            {data.mot.map((vehicle, index) => {
              return (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      vehicle === "Y"
                        ? "hsl(var(--fc2))"
                        : vehicle === "EX"
                        ? "hsl(var(--fc2), 50%)"
                        : null,
                  }}
                >
                  <p className="sub-header">{vehicle}</p>
                </li>
              );
            })}
          </ul>

          <ul className={styles.description}>
            {data.type === "LANDROVER"
              ? Landrover.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.desc}</p>
                    </li>
                  );
                })
              : AllOthers.map((vehicle, index) => {
                  return (
                    <li key={index}>
                      <p className="sub-header">{vehicle.desc}</p>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.headers}>
          <h3 className="header">933 Applicability</h3>
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.number}>
            {All.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p className="sub-header">{vehicle.im}</p>
                </li>
              );
            })}
          </ul>

          <ul className={styles.applicable}>
            {data.operational.map((vehicle, index) => {
              return (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      vehicle === "Y"
                        ? "hsl(var(--fc2))"
                        : vehicle === "EX"
                        ? "hsl(var(--fc2), 50%)"
                        : null,
                  }}
                >
                  <p className="sub-header">{vehicle}</p>
                </li>
              );
            })}
          </ul>

          <ul className={styles.description}>
            {All.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p className="sub-header">{vehicle.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
