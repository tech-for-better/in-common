import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { useState } from "react";

export default function Test() {
  //current user state
  const [user, setUser] = useState({});

  //auth state listener

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  // signup

  // signup for states

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  // signup function

  async function signUp() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
    } catch (error) {
      console.log(error);
    }
  }

  // login

  // login form states

  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  // login function

  async function logIn() {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Sign out function to log out

  async function logOut() {
    try {
      await signOut(auth);
      console.log("signed out!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setSignUpEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            signUp();
          }}
        >
          Submit
        </button>
      </form>

      <form>
        <h2>Log In</h2>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => setLogInEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setLogInPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            logIn();
          }}
        >
          Submit
        </button>
      </form>

      <h2>{user?.email ? `${user?.email} logged in` : "no one logged in"}</h2>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("logging out");
          logOut();
        }}
      >
        log out
      </button>
    </div>
  );
}
