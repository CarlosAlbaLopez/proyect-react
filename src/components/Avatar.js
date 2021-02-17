import React from "react";

const Avatar = (props) => {
  const { imageId, name } = props;
  return (
    <div className="Avatar">
      <img src={`/avatars/${imageId}.png`} alt="Avatar" />
      {name}
    </div>
  );
};

export default Avatar;
