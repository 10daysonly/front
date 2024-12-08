import styles from "./main.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>메인</div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
