import styles from "../css/TasksTable.module.css";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  MouseEventHandler,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { EmptyList } from "./EmptyList";
interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export function TasksTable() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newtaskText, setNewTaskText] = useState("");
  function handleSubmitTask(e: FormEvent) {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: uuidv4(), text: newtaskText, isCompleted: false },
    ]);
    console.log(tasks);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCompleteTask(
    taskToUpdate: Task
  ): ChangeEventHandler<HTMLInputElement> {
    return () => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskToUpdate.id) {
          console.log("cheguei");
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        console.log("cheguei");
        return task;
      });

      setTasks(updatedTasks);
    };
  }
  return (
    <>
      <div className={styles.wrapper}>
        <form action="" className={styles.taskForm} onSubmit={handleSubmitTask}>
          <input
            type="text"
            placeholder="Adicionar uma nova tarefa!"
            onChange={handleNewTaskChange}
          />
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
              Concluídas <span>2 de 5</span>
            </div>
          </div>
          <div className={styles.taskBoard}>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Task
                  isCompleted={task.isCompleted}
                  key={task.id}
                  text={task.text}
                  changeIsComplete={handleCompleteTask(task)}
                ></Task>
              ))
            ) : (
              <EmptyList></EmptyList>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
