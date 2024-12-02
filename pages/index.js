import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to GTPH Private Server</h1>
        <p className={styles.subtitle}>
          Your gateway to endless fun! Join the adventure now.
        </p>
        <div className={styles.buttons}>
          <a href="https://login.gtphprivateserver.site" className={styles.link}>
            <button className={styles.button}>Login</button>
          </a>
          <a href="https://register.gtphprivateserver.site" className={styles.link}>
            <button className={styles.button}>Register</button>
          </a>
        </div>
      </header>
      <footer className={styles.footer}>
        <p>© 2024 GTPH Private Server. All rights reserved.</p>
      </footer>
    </div>
  );
}
