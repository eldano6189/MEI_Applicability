import styles from "./QuickView.module.css";
import { useContext } from "react";
import VehData from "../../Context/Context";
import { Landrover } from "../../Data/932/Landrover";

export const QuickView = () => {
  const { veh } = useContext(VehData);

  return (
    <div className={styles.container}>
      <p className="header">Quick view</p>
      <p className="header">932</p>
      <ul className={styles.reference}>
        {veh.info.type === "LANDROVER"
          ? Landrover.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p className="paragraph">{vehicle.im}</p>
                </li>
              );
            })
          : null}
      </ul>
      <ul className={styles.reference}>
        {veh.info.type === "LANDROVER"
          ? veh.mot.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p
                    className="paragraph"
                    style={{
                      color:
                        vehicle === "y" || vehicle === "ex"
                          ? "hsl(var(--fc1))"
                          : "hsl(var(--fc1), 20%)",
                    }}
                  >
                    {vehicle}
                  </p>
                </li>
              );
            })
          : null}
      </ul>
      <p className=" header">933</p>
      <ul className={styles.reference}>
        {veh.info.type === "LANDROVER"
          ? Landrover.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p className="paragraph">{vehicle.im}</p>
                </li>
              );
            })
          : null}
      </ul>
      <ul className={styles.reference}>
        {veh.info.type === "LANDROVER"
          ? Landrover.map((vehicle, index) => {
              return (
                <li key={index}>
                  <p className="paragraph">{vehicle.im}</p>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
