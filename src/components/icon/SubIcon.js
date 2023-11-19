import React from "react";

const SubIcon = ({buttonClicked}) => {
  return (
    <div className="px-3 space-y-3 pt-10">
      <div>
        <p className="text-white text-center text-lg font-bold">
          {buttonClicked.title}
        </p>
      </div>
      <div>
        <p className=" hover:underline cursor-pointer whitespace-nowrap text-white">
          Lorem ipsum
        </p>
        <p className=" hover:underline cursor-pointer text-white">Lorem dera</p>
        <p className=" hover:underline cursor-pointer text-white">Lorem ksad</p>
      </div>
    </div>
  );
};

export default SubIcon;
