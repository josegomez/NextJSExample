'use client' // This directive tells Next.js to only render this page on the client side.

import Link from "next/link"; // Importing Link for client-side navigation.
import styles from "./signup.module.css"; // Importing CSS module for styling this specific component.
import { useRouter } from 'next/navigation' // Importing useRouter hook for programmatic navigation.

// The Signup functional component.
const Signup = () => {
  const router = useRouter(); // Instantiating the router object to allow for page navigation.

  // The handleSubmit function will be called when the form is submitted. Create account button is clicked.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission action which causes a page reload.

    // Accessing the form elements using their respective ids and extracting their values.
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };

    // Creating a user object with the values from the form.
    const user = {
      username: formElements.username.value,
      email: formElements.email.value,
      password: formElements.password.value,
    };

    // Retrieving the users array from localStorage, parsing it from JSON, or initializing an empty array if it doesn't exist.
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Adding the new user to the users array.
    users.push(user);

    // Saving the updated users array back to localStorage in JSON format.
    localStorage.setItem("users", JSON.stringify(users));

    // Redirecting the user to the login page and passing the new username as a query parameter.
    // The new user array was stored in the browser in localstorage and can be accessed by the login page.
    router.push(`/login?username=${user.username}`);
  };

  // The JSX that is returned and rendered by the component.
  return (
    <div className={styles.container}>
      <h1>Create Account</h1>
      <form className={styles.formSignUp} onSubmit={handleSubmit}>
        <input
          className={styles.inputSignUp}
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className={styles.inputSignUp}
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className={styles.inputSignUp}
          type="password"
          placeholder="Password"
          id="password"
        />
        
        <button className={styles.buttonSignUp} type="submit">
          Create Account
        </button>
      </form>
      
      <Link className={styles.aSignUp} href="/">
        Go back
      </Link>
    </div>
  );
};

export default Signup; // Exporting the Signup component for use in the application.
