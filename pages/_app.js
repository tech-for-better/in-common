import "../styles/globals.css";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "@firebase/auth";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return <Component {...pageProps} user={user} />;
}

export default MyApp;
