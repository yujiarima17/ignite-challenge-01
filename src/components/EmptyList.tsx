import Clipboard from "../images/Clipboard.svg";
import styles from "../css/EmptyList.module.css";
export function EmptyList() {
  return (
    <div className={styles.emptyAdviser}>
      <img src={Clipboard} alt="clipboard image" />
      <p>
        <span>Você ainda não tem tarefas cadastradas</span>Crie tarefas e
        organize seus itens a fazer
      </p>
    </div>
  );
}
