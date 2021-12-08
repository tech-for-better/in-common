import SignUpComponent from "../components/Signup/SignUpComponent";
import Confirmation from "../components/Signup/Confirmation";

import { useState } from "react";
export default function Signup() {
  const [user, setUser] = useState({});
  return (
    <>
      {/* {<SignUpComponent user={user} setUser={setUser} />} */}
      {user?.email ? (
        <Confirmation user={user} setUser={setUser} />
      ) : (
        <SignUpComponent user={user} setUser={setUser} />
      )}
    </>
  );
}
