import React, { useState } from "react";

const ChatInCourse = ({ type, text }) => {
  const [clicked, setClicked] = useState(false);
  function CopyToClipboard() {
    setClicked(true);
    navigator.clipboard.writeText(text);
    setClicked(false);
  }
  return (
    <div
      className={
        "px-3 py-1 bg-white rounded-xl m-2 shadow " +
        (type === "answer"
          ? "shadow-green-400"
          : "shadow-[0px_0px_4px_rgb(218,42,32)]")
      }
    >
      <p
        className={
          "text-[16px] font-semibold font-poppins text-colorText " +
          (type === "answer" ? "text-right" : "text-left")
        }
      >
        {text}
      </p>
    </div>
  );
};

export default ChatInCourse;
