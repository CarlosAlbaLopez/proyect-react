import React, { useState } from "react";
import { ChatRoomHeader } from "./ChatRoomHeader";
import { ChatMessage } from "./ChatMessage";

export const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      author: 456331,
      body: value,
      date: new Date().toLocaleDateString(),
    };

    const res = await fetch("http://localhost:3050/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });

    const resMessage = await res.json();
    const newMessagesArray = [...messages, resMessage];
    setMessages(newMessagesArray);

    setValue("");
  }

  const loadMessages = (e) => {
    e.preventDefault();
    fetch("http://localhost:3050/messages")
      .then((res) => res.json())
      .then(
        (res) => setMessages(res),
        (msg) => console.error("Err:", msg)
      );
  };

  return (
    <div className="chatRoom">
      <ChatRoomHeader />
      <form onSubmit={loadMessages}>
        <button type="submit" className="Cargar">
          Cargar
        </button>
      </form>
      <ul className="ListOfMessages">
        {messages.map((message) => (
          <ChatMessage key={message.id} msg={message}></ChatMessage>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <textarea
          name="Mensaje"
          className="TextArea"
          rows="4"
          value={value}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Enviar" className="submit" />
      </form>
    </div>
  );
};
