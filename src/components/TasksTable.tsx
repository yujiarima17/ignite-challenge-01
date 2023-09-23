import styles from "../css/TasksTable.module.css";
import { PlusCircle } from "phosphor-react";
import { EmptyList } from "./EmptyList";
import { Task } from "./Task";
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
        <div className={styles.tasksList}>
          <div className={styles.statusBar}>
            <div className={styles.tarefaConcluida}>
              Tarefas Criadas <span>0</span>
            </div>
            <div className={styles.concluida}>
              Concluídas <span>0</span>
            </div>
          </div>
          <div className={styles.taskBoard}>
            <Task ></Task>
          </div>
        </div>
      </div>
    </>
  );
}
