import React from "react";

const Select = ({ children, title, autoComplete }) => {
  return (
    <div className="mt-2">
      <select
        id={title}
        name={title}
        autoComplete={autoComplete}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-w-xs text-sm leading-6"
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
