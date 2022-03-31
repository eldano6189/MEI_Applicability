import styles from "./QuickView.module.css";
import { Vehicles } from "../../Data/Vehicles";

export const QuickView = () => {
  return (
    <div className={styles.container}>
      <p>Quick view</p>
      <ul className={styles.reference}></ul>
      <ul className={styles.aplicability}></ul>
    </div>
  );
};
