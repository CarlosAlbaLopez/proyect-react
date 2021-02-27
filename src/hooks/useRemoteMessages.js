import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../App";

export function useRemoteMessages(initialList) {
  const [messages, setMessages] = useState(initialList);
  const [accessToken] = useContext(TokenContext);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3050/660/messages", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then(
          (res) => setMessages(res),
          (msg) => console.error("Err:", msg)
        );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return [messages, setMessages];
}
