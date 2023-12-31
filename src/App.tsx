import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TasksTable } from "./components/TasksTable";
function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <main>
          <TasksTable />
        </main>
      </div>
    </>
  );
}

export default App;
