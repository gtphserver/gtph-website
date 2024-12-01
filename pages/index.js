import Link from 'next/link';
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
          <Link href="/login">
            <button className={styles.button}>Login</button>
          </Link>
          <Link href="/register">
            <button className={styles.button}>Register</button>
          </Link>
        </div>
      </header>
      <footer className={styles.footer}>
        <p>© 2024 GTPH Private Server. All rights reserved.</p>
      </footer>
    </div>
  );
}
