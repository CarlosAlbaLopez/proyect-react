import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChatRoom } from "./pages/ChatRoom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ChatMessage } from "./components/ChatMessage";
import { useRemoteUsers } from "./hooks/useRemoteUsers";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Profile } from "./pages/Profile";

const defaultValue = ["Mr. Bean", 456317];

export const UserContext = createContext(defaultValue);

const UserProvider = (props) => {
  const [selectedUser, setSelectedUser] = useLocalStorage("selectedUser");
  return (
    <UserContext.Provider value={[selectedUser, setSelectedUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const TokenContext = createContext("");

const TokenProvider = (props) => {
  const [token, setToken] = useLocalStorage("accessToken");
  return (
    <TokenContext.Provider value={[token, setToken]}>
      {props.children}
    </TokenContext.Provider>
  );
};

function App() {
  const [users] = useRemoteUsers();

  const render = (message) => (
    <ChatMessage
      key={message.id}
      msg={message}
      author={findAuthor(users, parseInt(message.author))}
      users={users}
    ></ChatMessage>
  );

  const findAuthor = (people, authorId) => {
    return people.find((person) => person.id === authorId);
  };

  return (
    <Router>
      <TokenProvider>
        <UserProvider>
          <div>
            <nav>
              <ul className="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/">
                <ChatRoom render={render} people={users} />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </div>
        </UserProvider>
      </TokenProvider>
    </Router>
  );
}

export default App;
