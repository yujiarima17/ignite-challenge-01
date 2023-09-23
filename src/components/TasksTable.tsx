import styles from "../css/TasksTable.module.css";
import { PlusCircle } from "phosphor-react";
export function TasksTable() {
  return (
    <>
      <div className={styles.wrapper}>
        <form action="" className={styles.taskForm}>
          <input type="text" placeholder="Adicionar uma nova tarefa!" />
          <button>
            Criar <PlusCircle size={20} />
          </button>
        </form>
        <div className="tasks-list"></div>
      </div>
    </>
  );
}
