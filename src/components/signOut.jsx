import React from "react";
import { auth } from "../firebase";
import Button from "@mui/material/Button";
import "./components.css";

const signOut = () => {
  return (
    <>
      <div className="nav">
        <h2 className="icon">
          <span>Chat</span>
          <span>App</span>
        </h2>
        <Button
          style={{
            padding: "12px 20px",
            margin: "5px 0px",
          }}
          onClick={() => auth.signOut()}
          variant="outlined"
        >
          Sign Out
        </Button>
      </div>
    </>
  );
};

export default signOut;
