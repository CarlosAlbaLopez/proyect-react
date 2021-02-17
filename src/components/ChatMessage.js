import React from "react";
import Avatar from "./Avatar";
import { MessageBody } from "./MessageBody";

export const ChatMessage = ({ msg }) => {
  const { author, body } = msg;
  return (
    <div className="ChatMessage">
      <Avatar imageId={author} name={author} />
      <MessageBody>{body}</MessageBody>
    </div>
  );
};
