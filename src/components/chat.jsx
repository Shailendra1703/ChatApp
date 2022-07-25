import React, { useEffect, useRef, useState } from "react";
import SignOut from "./signOut";
import SendMessage from "./sendMessage";
import { db, auth } from "../firebase";

const Chat = () => {
  const [message, setMessage] = useState([]);
  const scroll = useRef(null);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapShot) => {
        setMessage(snapShot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      <SignOut key={this} />
      <div className="msgs">
        {message.map(({ id, text, photoURL, uid }) => (
          <div key={id}>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </>
  );
};

export default Chat;
