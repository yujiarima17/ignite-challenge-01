import { Trash } from "phosphor-react";
import styles from "../css/Task.module.css";
import { Checkbox } from "./Checkbox";
interface TaskProp {
  isComplete: boolean;
  text: string;
}
export function Task({ text, isComplete }: TaskProp) {
  return (
    <div className={styles.task}>
      <Checkbox />
      <p>{text}</p>
      <Trash size={20} />
    </div>
  );
}
