// pages/index.tsx
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <nav className={styles.nav}>
        <Link href="/login">
          <a className={styles.link}>Login</a>
        </Link>
        <Link href="/signup">
          <a className={styles.link}>Create Account</a>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
