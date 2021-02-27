import React, { useContext } from "react";
import { ChatRoomHeader } from "../components/ChatRoomHeader";
import { useRemoteMessages } from "../hooks/useRemoteMessages";
import { useRemoteUsers } from "../hooks/useRemoteUsers";
import { UsersList } from "../components/UsersList";
import { TokenContext, UserContext } from "../App";
import Avatar from "../components/Avatar";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Redirect } from "react-router-dom";

export const ChatRoom = ({ render }) => {
  const [value, setValue] = useLocalStorage("newMessage");
  const [messages, setMessages] = useRemoteMessages([]);
  const [selectedUser, setSelectedUser] = useContext(UserContext);
  const [users] = useRemoteUsers(selectedUser);
  const [accessToken] = useContext(TokenContext);

  if (selectedUser === "") {
    setSelectedUser(["Mr. Bean", 456317]);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      author: selectedUser[1],
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

  if (!accessToken) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="chatRoom">
      <ChatRoomHeader />
      <ul className="ListOfMessages">{messages.map(render)}</ul>
      <div className="Container">
        <form onSubmit={handleSubmit}>
          <textarea
            name="Mensaje"
            className="TextArea"
            rows="4"
            value={value}
            onChange={handleChange}
          ></textarea>
          <UsersList people={users} setPeople={setSelectedUser}></UsersList>
          <input type="submit" value="Enviar" className="submit" />
          <Avatar imageId={selectedUser[1]} name={selectedUser[0]} />
        </form>
      </div>
    </div>
  );
};
