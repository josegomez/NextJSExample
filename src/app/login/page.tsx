"use client";
import Link from "next/link";

import styles from "./login.module.css";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {

  // Setup satet for error message and username this is where we will store / retrieve the user and error messages that may be passed in
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");

  // Setup search params to retrieve the username and error message from the query params anything passed in as ?key=value&key2=value2 will be available here
  const searchParams = useSearchParams();

  const router = useRouter();

  // useEffect is a react hook that will run when the component is mounted it will run once and only once
  // This is where we will retrieve the username and error message from the query params
  // If the username is present we will set the username state to the username
  // If the error message is present we will set the error message state to the error message

  useEffect(() => {
    // Get username from query params (if available)
    const userName = searchParams.get("username");
    if (userName) {
      setUsername(userName);
    }

    // Get error message from query params (if available)
    const error = searchParams.get("error");
    if (error) {
      setErrorMessage(error);
    }
  }, [setUsername,setErrorMessage, searchParams]);

  // This is the function that will run when the form is submitted (login is clicked)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission action which causes a page reload.

    // Accessing the form elements using their respective ids and extracting their values.
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      username: { value: string };
      password: { value: string };
    };

    const username = formElements.username.value;
    const password = formElements.password.value;

    // Get user array from local storage or initialize empty array
    const users =
      (JSON.parse(localStorage.getItem("users") || "[]") as {
        username: string;
        email: string;
        password: string;
      }[]) || [];

    //Select user from array if it exists and credentaiols are correct
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // Store currentUser in localStorage
      localStorage.setItem("currentUser", JSON.stringify({ user }));

      // Redirect to dashboard
      router.push("/dashboard");
    } else {
      // If credentials are invalid, set an error message
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <form className={styles.loginform} onSubmit={handleSubmit}>
        <input
          className={styles.inputlogin}
          defaultValue={username ?? ""}
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className={styles.inputlogin}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className={styles.loginbutton} type="submit">
          Login
        </button>
      </form>
      <Link className={styles.aBack} href="/">Go back</Link>
    </div>
  );
};

export default Login;
