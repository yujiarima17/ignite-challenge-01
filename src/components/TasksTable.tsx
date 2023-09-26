import styles from "../css/TasksTable.module.css";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  InvalidEvent,
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
  const isNewTaskEmpty = newtaskText.length == 0;
  function handleSubmitTask(e: FormEvent) {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: uuidv4(), text: newtaskText, isCompleted: false },
    ]);
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
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });

      setTasks(updatedTasks);
    };
  }

  const tasksCompleted = tasks.filter(
    (task) => task.isCompleted == true
  ).length;
  function handleDeleteTask(
    taskToUpdate: Task
  ): MouseEventHandler<HTMLButtonElement> {
    return () => {
      const updatedTasks = tasks.filter((task) => task.id != taskToUpdate.id);
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
            required
          />
          <button disabled={isNewTaskEmpty}>
            Criar <PlusCircle size={20} />
          </button>
        </form>
        <div className={styles.tasksList}>
          <div className={styles.statusBar}>
            <div className={styles.tarefaConcluida}>
              Tarefas Criadas <span>{tasks.length}</span>
            </div>
            <div className={styles.concluida}>
              Concluídas <span>{`${tasksCompleted} of ${tasks.length}`}</span>
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
                  deleteTask={handleDeleteTask(task)}
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
