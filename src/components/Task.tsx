import { Trash } from "phosphor-react";
import styles from "../css/Task.module.css";
import { CheckBox } from "./CheckBox";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface TaskProp {
  text: string;
  isCompleted: boolean;
  changeIsComplete: ChangeEventHandler<HTMLInputElement> | undefined;
  deleteTask: MouseEventHandler<HTMLButtonElement> | undefined;
}
export function Task({
  text,
  changeIsComplete,
  deleteTask,
  isCompleted,
}: TaskProp) {
  return (
    <div className={styles.task}>
      <CheckBox changeIsComplete={changeIsComplete} />
      <p className={isCompleted ? styles.completed : ""}>{text}</p>
      <button onClick={deleteTask}>
        <Trash size={15} />
      </button>
    </div>
  );
}
