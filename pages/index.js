import * as React from "react";
import ApprovalSplash from "../components/ApprovalSplash/ApprovalSplash";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";

export default function Index(props) {
  if (props.user && props.approved) return <Dashboard {...props} />;
  if (props.user && !props.approved) return <ApprovalSplash />;
  return <Login {...props} />;
}
