import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
const DropdownBody = ({ children, direction }) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={
          "absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focАus:outline-none " +
          (direction === "left" && " left-0 ") +
          (direction === "right" && " right-0 ")
        }
      >
        {children}
      </Menu.Items>
    </Transition>
  );
};

export default DropdownBody;
