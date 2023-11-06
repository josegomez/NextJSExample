// pages/index.tsx
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>Create Account</a>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
