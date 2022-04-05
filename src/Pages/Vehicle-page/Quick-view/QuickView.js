import styles from "./QuickView.module.css";

import { PDF932, PDF933 } from "../../../Components/PDF-printout/PDFPrintout";
import { Landrover } from "../../../Data/932/Landrover";
import { AllOthers } from "../../../Data/932/AllOthers";
import { All } from "../../../Data/933/All";

export const QuickView = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inspectionSheets}>
        <p className="header">Inspection sheets:</p>
        <PDF932 data={data} />
        <PDF933 data={data} />
      </div>
      <p className="header">Quick view</p>
      <p className="header">932</p>
      <ul className={styles.reference}>
        {data.type === "LANDROVER"
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
                  vehicle === "Y"
                    ? "hsl(var(--fc2))"
                    : vehicle === "EX"
                    ? "hsl(var(--fc2),50%)"
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
                  vehicle === "Y"
                    ? "hsl(var(--fc2))"
                    : vehicle === "EX"
                    ? "hsl(var(--fc2),50%)"
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
