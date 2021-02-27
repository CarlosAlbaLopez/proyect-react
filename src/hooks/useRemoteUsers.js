import React, { useEffect, useState } from "react";

export const useRemoteUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("http://localhost:3050/people");
      if (response.status === 200) {
        const json = await response.json();
        setUsers(json);
      }
    };
    loadUsers();
  }, []);

  return [users, setUsers];
};
