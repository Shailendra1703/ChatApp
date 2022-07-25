import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import Button from "@mui/material/Button";

const signIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            padding: "10px",
            fontSize: "20px",
            borderRadius: "5px",
            fontWeight: "500",
          }}
          onClick={signInWithGoogle}
          variant="outlined"
        >
          Sign in with Google
        </Button>
      </div>
    </>
  );
};

export default signIn;
