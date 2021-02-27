import React from "react";
import Avatar from "../components/Avatar";
import { MessageBody } from "./MessageBody";

export const ChatMessage = (props) => {
  const { msg } = props;
  const writter = props.author;
  const { author, body, id } = msg;
  const authorInt = parseInt(author);

  const handleDeleteMessage = async () => {
    const res = await fetch(`http://localhost:3050/messages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <div className="ChatMessage">
      <Avatar imageId={authorInt} name={writter?.name} />
      <MessageBody>{body}</MessageBody>
      <button onClick={handleDeleteMessage}>X</button>
    </div>
  );
};
