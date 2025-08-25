import React, {useState, useEffect} from "react";
import "./App.css"; // optional: you can style buttons here

function EmojiMoodSelector() {
  const emojis = ["😊", "😐", "😢", "😡", "😴"];

  const[check_emoji, , useState(false)];

  const handleMoodSelect = (emoji) => {
    UseEffect()
  };

  const getMoodMessage = (emoji) => {
    // 3. Return a custom message based on the emoji
    // Example: 😊 => "You seem happy today!"
    return "";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>How are you feeling today?</h2>

      <div style={{ fontSize: "2rem", margin: "20px" }}>
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(emoji)}
            style={{
              fontSize: "2rem",
              margin: "5px",
              padding: "10px",
              cursor: "pointer",
              // 4. Highlight the selected emoji (conditionally change background)
            }}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* 5. Show the selected mood message */}
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        {/* Render the message here */}
      </p>
    </div>
  );
}

export default EmojiMoodSelector;
