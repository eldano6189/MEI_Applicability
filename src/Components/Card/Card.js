import styles from "./Card.module.css";

import { Link } from "react-router-dom";

import { Landrover } from "../../Assets/SVG/Landrover";
import { MAN } from "../../Assets/SVG/Man";
import { TRL } from "../../Assets/SVG/Trl";
import { FEPS } from "../../Assets/SVG/FEPS";

export const Card = ({ data }) => {
  return (
    <li className={styles.card}>
      <Link to={`/${data.vrn}`}>
        <div className={styles.wrapper}>
          <p className={`${styles.label} paragraph`}>VRN:</p>
          <h2 className={`${styles.info} sub-header`}>{data.vrn}</h2>
          <div className={styles.imageContainer}>
            <p className={`${styles.infoText} paragraph`}>{data.info}</p>
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
          <p className="paragraph">{data.desc}</p>
        </div>
      </Link>
    </li>
  );
};
