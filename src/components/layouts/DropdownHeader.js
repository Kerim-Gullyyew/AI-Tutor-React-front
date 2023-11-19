import React from "react";
import { Menu } from "@headlessui/react";
const DropdownHeader = ({ children }) => {
  return (
    <div>
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-colorText hover:ring-1 hover:ring-inset ring-gray-300 hover:bg-gray-50  items-center cursor-pointer hover:text-green-500">
        <div className="flex items-center">{children}</div>
      </Menu.Button>
    </div>
  );
};

export default DropdownHeader;
