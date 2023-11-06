"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  // Setup state for current user this is where we will store current user (if available) once we retrieve it.
  const [currentUser, setCurrentUser] = useState<{
    user:{username: String;
    email: String;
    password: String;
  }} | null>(null);

  // This is the function that will run when the user clicks the logout button
  const handleLogout = () => {
    // Remove currentUser from localStorage
    localStorage.removeItem("currentUser");
    // Redirect to the home page
    router.push("/");
  };

  // useEffect is a react hook that will run when the component is mounted it will run once and only once
  useEffect(() => {
    // Retrieve the user from localStorage
    const user = localStorage.getItem("currentUser");
    const userData = user && JSON.parse(user);

    // If no user is found in localStorage, redirect to login
    if (!userData) {
      router.push("/login?error=You are not logged in");
    } else {
      setCurrentUser(userData);
    }
  }, [router]);

  // Display the dashboard only if userEmail is defined
  return currentUser ? (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>Welcome back, {currentUser.user.email}!</p>
      <button onClick={handleLogout}>Logout</button>

    </div>
  ) : null; // or a loading spinner, etc.
};

export default Dashboard;
