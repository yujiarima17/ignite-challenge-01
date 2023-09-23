import styles from "../css/TasksTable.module.css";
export function TasksTable() {
  return (
    <>
      <div className={styles.wrapper}>
        <form action="">
          <input type="text" />
          <button>Criar</button>
        </form>
        <div className="tasks-list"></div>
      </div>
    </>
  );
}
