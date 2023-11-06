// pages/login.tsx
import Link from 'next/link';
import { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <div>
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
