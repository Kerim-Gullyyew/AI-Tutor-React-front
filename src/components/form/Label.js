import React from "react";

const Label = ({htmlFor, title}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {title}
    </label>
  );
};

export default Label;
