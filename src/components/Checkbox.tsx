import styles from "../css/Checkbox.module.css";
export function Checkbox() {
  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox"></input>
      <span className={styles.checkmark}></span>
    </label>
  );
}
