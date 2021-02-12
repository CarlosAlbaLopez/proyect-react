import React, { useState } from "react";
import "./App.css";

const Avatar = (props) => {
  const { imageId, name } = props;
  return (
    <div className="Avatar">
      <img src={`/avatars/${imageId}.png`} alt="Avatar" />
      {name}
    </div>
  );
};

const MessageBody = ({ children }) => (
  <div className="MessageBody">{children}</div>
);

const ChatMessage = ({ msg }) => {
  const { author, body } = msg;
  return (
    <div className="Message">
      <Avatar imageId={author} name={author} />
      <MessageBody>{body}</MessageBody>
    </div>
  );
};

class ChatRoomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newDate = new Date();
      this.setState({ date: newDate });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="ChatRoomHeader">{this.state.date.toLocaleString()}</div>
    );
  }
}

const ChatRoom = () => {
  const [messages, setMessages] = useState(messageList);

  return (
    <div className="chatRoom">
      <ChatRoomHeader />

      {messages.map((message) => (
        <ChatMessage key={message.id} msg={message}></ChatMessage>
      ))}
      {/* <ChatMessage msg={messages[0]}></ChatMessage>
      <ChatMessage msg={messages[1]}></ChatMessage>
      <ChatMessage msg={messages[2]}></ChatMessage> */}

      <button
        onClick={() =>
          setMessages([
            ...messages,
            {
              author: 456329,
              body: "me gustan los gatos",
              date: "2019-03-27T09:33:41.579Z",
              id: 9,
            },
          ])
        }
      >
        Añadir
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <ChatRoom />
    </div>
  );
}

export default App;

const messageList = [
  {
    id: 1,
    author: 456317,
    body:
      "mensaje 0 con un texto algo largo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2019-03-26T18:33:00",
  },
  {
    id: 2,
    author: 456317,
    body:
      "mensaje 1 de texto suficientemente largo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2019-03-26T18:33:02",
  },
  {
    author: 456326,
    body: "Yo... no soy tu padre",
    date: "2019-03-27T09:33:41.579Z",
    id: 3,
  },
  {
    author: 456329,
    body: "hola",
    date: "2019-03-27T09:33:41.579Z",
    id: 4,
  },
  {
    author: 456329,
    body: "adios",
    date: "2019-03-27T09:33:41.579Z",
    id: 5,
  },
  {
    author: 456329,
    body: "nuevo",
    date: "2019-03-27T09:33:41.579Z",
    id: 6,
  },
  {
    author: 456329,
    body: "a ver si desta",
    date: "2019-03-27T09:33:41.579Z",
    id: 7,
  },
  {
    author: 456329,
    body: "leñe",
    date: "2019-03-27T09:33:41.579Z",
    id: 8,
  },
];

// <ChatRoomHeader />

// <ChatMessage avatar={avatarImgUno} userName="Juan Solo">
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis
//   dolor, auctor nec diam sit amet, faucibus ultrices tortor. Integer
//   pellentesque congue metus et imperdiet. Integer posuere consequat
//   risus, eget dignissim nibh dignissim quis. Sed in purus id diam
//   blandit congue. Nullam at turpis at erat porttitor congue.
// </ChatMessage>

// <ChatMessage avatar={avatarImgDos} userName="Lara Dos">
//   Aliquam vitae quam volutpat, porttitor magna nec, gravida metus.
// </ChatMessage>

// <ChatMessage avatar={avatarImgTres} userName="Otilio">
//   Nulla id purus sit amet ipsum euismod fermentum sit amet nec sapien.
//   Aliquam rhoncus gravida lectus, nec ullamcorper ante euismod faucibus.
// </ChatMessage>
