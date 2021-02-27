import React from "react";

export const UsersList = ({ people, setPeople }) => {
  function handleSelection(event) {
    setPeople([
      event.target.options[event.target.selectedIndex].text,
      event.target.value,
    ]);
  }

  return (
    <select name="people" className="People" onChange={handleSelection}>
      {people.map((user) => {
        return (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        );
      })}
    </select>
  );
};
