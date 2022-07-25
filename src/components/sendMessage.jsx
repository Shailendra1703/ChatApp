import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { db, auth } from "../firebase";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = ({ scroll }) => {
  const [disabled, setDisabled] = useState(true);

  function handleChange(e) {
    setMsg(e.target.value);

    if (e.target.value.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const [msg, setMsg] = useState("");
  async function sendMessage(e) {
    e.preventDefault(); //stop from page reload
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    setDisabled(true);
  }
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "20px",
              fontWeight: "550",
              marginLeft: "10px",
              marginBottom: "-3px",
              padding: "10px 5px;",
            }}
            placeholder="send a message"
            type="text"
            value={msg}
            onChange={handleChange}
          />
          <Button
            className="send"
            type="submit"
            disabled={disabled}
            style={{
              width: "18%",
              padding: "15px 11px",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            variant="contained"
          >
            <SendIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
