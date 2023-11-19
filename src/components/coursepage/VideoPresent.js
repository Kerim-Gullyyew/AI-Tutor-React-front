import React from "react";
import Image from "../../img/download.jpg";

const VideoPresent = () => {
  return (
    <div className="p-2 w-full">
      <p className="text-center font-poppins font-semibold text-[20px] text-colorText">
        Theme Name
      </p>
      <div className="flex flex-col justify-center items-center">
        <img src={Image} className="m-3 w-[900px]" alt="img" />
      </div>
    </div>
  );
};

export default VideoPresent;
