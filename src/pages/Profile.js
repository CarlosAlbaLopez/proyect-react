import React, { useState } from "react";
import "../Profile.css";

export function Profile() {
  const [file, setFile] = useState("");

  const uploadFile = () => {
    let data = new FormData();
    // para asociar la imagen al usuario
    // data.append("userId", userId);
    data.append("image", file);
    fetch("http://localhost:3050/files", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((success) => {
        console.log(success);
      })
      .catch((error) => console.error(error));
  };

  const onFileChange = (event) => {
    const f = event.target.files[0];
    setFile(f);
  };

  return (
    <div className="App">
      <form onSubmit={uploadFile}>
        <div>
          <label>Select file to upload</label>
          <input type="file" onChange={onFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
