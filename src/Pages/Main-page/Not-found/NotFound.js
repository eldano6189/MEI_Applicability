import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className="header">
        Sorry the VRN you searched for could not be found, please ensure the
        spelling is correct and try again!
      </h1>
    </div>
  );
};
