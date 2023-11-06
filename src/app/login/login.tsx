// pages/login.tsx
import Link from 'next/link';
import { NextPage } from 'next';
import styles from './login.module.css';

const Login = () => {
    return (
      <div className={styles.container}>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    );
  };
  
  export default Login;
