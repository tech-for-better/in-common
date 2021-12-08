import * as React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";

export default function Index(props) {
  if (props.user) return <Dashboard {...props} />;
  return <Login {...props} />;
}
