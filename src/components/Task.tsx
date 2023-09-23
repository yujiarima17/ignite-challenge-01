import { Trash } from "phosphor-react";
import styles from "../css/Task.module.css";
import { Checkbox } from "./Checkbox";
export function Task() {
  return (
    <div className={styles.task}>
      <Checkbox />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam
        necessitatibus unde et earum pariatur omnis quo natus ut? Autem sapiente
        illum animi ex magnam quo aliquam maxime hic explicabo?
      </p>
      <Trash size={20} />
    </div>
  );
}
