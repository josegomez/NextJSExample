// pages/signup.tsx
import Link from 'next/link';
import { NextPage } from 'next';
import styles from './signup.module.css';

const Signup = () => {
    return (
      <div className={styles.container}>
        <h1>Create Account</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Create Account</button>
        </form>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    );
  };
  
  export default Signup;