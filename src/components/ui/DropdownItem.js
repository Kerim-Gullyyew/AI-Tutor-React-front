import React from "react";
import { Menu } from "@headlessui/react";
const DropdownItem = ({ title }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block cursor-pointer px-4 py-2 text-sm"
          )}
        >
          {title}
        </div>
      )}
    </Menu.Item>
  );
};

export default DropdownItem;
