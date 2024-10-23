import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>TICTO</span>
        <span>TICTO</span>
      </div>
    </div>
  );
}
