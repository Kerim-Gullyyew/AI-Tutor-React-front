import React from "react";
import { Menu } from "@headlessui/react";

const Dropdown = ({children}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">

        {children}
      


    </Menu>
  );
};

export default Dropdown;
