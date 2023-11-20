// pages/index.tsx
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page CI/CD New 2</h1>
      <nav className={styles.nav}>
        <Link href="/login" className={styles.link}>
          Login
        </Link>
        <Link href="/signup" className={styles.link}>
          Create Account
        </Link>
      </nav>
    </div>
  );
};

export default Home;
