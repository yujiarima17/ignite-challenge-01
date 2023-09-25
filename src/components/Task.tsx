import { Trash } from "phosphor-react";
import styles from "../css/Task.module.css";
import { CheckBox } from "./CheckBox";
import { ChangeEventHandler } from "react";

interface TaskProp {
  text: string;
  isCompleted: boolean;
  changeIsComplete: ChangeEventHandler<HTMLInputElement> | undefined;
}
export function Task({ text, changeIsComplete, isCompleted }: TaskProp) {
  return (
    <div className={styles.task}>
      <CheckBox changeIsComplete={changeIsComplete} />
      <p className={isCompleted ? styles.completed : ""}>{text}</p>
      <Trash size={20} />
    </div>
  );
}
