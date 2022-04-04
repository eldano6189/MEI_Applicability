import styles from "./QuickView.module.css";
import { Landrover } from "../../../Data/932/Landrover";
import { AllOthers } from "../../../Data/932/AllOthers";
import { All } from "../../../Data/933/All";

export const QuickView = ({ data }) => {
  return (
    <div className={styles.container}>
      <p className="header">Quick view</p>
      <p className="header">932</p>
      <ul className={styles.reference}>
        {data.info.type === "LANDROVER"
          ? Landrover.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p className="paragraph">{vehicle.im}</p>
                </li>
              );
            })
          : AllOthers.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p className="paragraph">{vehicle.im}</p>
                </li>
              );
            })}
      </ul>

      <ul className={styles.reference}>
        {data.mot.map((vehicle, index) => {
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
              <p className="paragraph">{vehicle}</p>
            </li>
          );
        })}
      </ul>

      <p className=" header">933</p>
      <ul className={styles.reference}>
        {All.map((vehicle, index) => {
          return (
            <li key={index}>
              <p className="paragraph">{vehicle.im}</p>
            </li>
          );
        })}
      </ul>

      <ul className={styles.reference}>
        {data.operational.map((vehicle, index) => {
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
              <p className="paragraph">{vehicle}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
