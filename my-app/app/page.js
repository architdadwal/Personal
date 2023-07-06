import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1> hey welcome to nextJS </h1>
      </div>
      <div className={styles.description}>
        <p> We are goiong to create a new web app </p>
      </div>
    </main>
  );
}
