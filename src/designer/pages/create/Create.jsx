import React, { useState } from "react";
import Styles from "./Create.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Create = () => {
  const [mediaType, setMediaType] = useState("post"); // "post" or "reel"
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Show preview
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setPreview(fileURL);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    alert(`Uploaded ${mediaType} successfully!`);
    setFile(null);
    setCaption("");
    setPreview(null);
  };

  return (
    <div className={Styles.createContainer}>
      <Sidebar />
      <div className={Styles.createBox}>
        <h2>Create {mediaType === "post" ? "Post" : "Reel"}</h2>

        <div className={Styles.switchButtons}>
          <button
            className={mediaType === "post" ? Styles.active : ""}
            onClick={() => setMediaType("post")}
          >
            Post
          </button>
          <button
            className={mediaType === "reel" ? Styles.active : ""}
            onClick={() => setMediaType("reel")}
          >
            Reel
          </button>
        </div>

        <label className={Styles.fileLabel}>
          <input
            type="file"
            accept={mediaType === "post" ? "image/*" : "video/*"}
            onChange={handleFileChange}
            hidden
          />
          <span>Choose {mediaType === "post" ? "an Image" : "a Video"}</span>
        </label>

        {preview && (
          <div className={Styles.preview}>
            {mediaType === "post" ? (
              <img src={preview} alt="Preview" />
            ) : (
              <video src={preview} controls />
            )}
          </div>
        )}

        <textarea
          className={Styles.captionInput}
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button className={Styles.uploadButton} onClick={handleUpload}>
          Upload {mediaType === "post" ? "Post" : "Reel"}
        </button>
      </div>
    </div>
  );
};

export default Create;
