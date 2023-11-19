import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import SidebarIcon from "../icon/SidebarIcon";
import SubIcon from "../icon/SubIcon";
const Sidebar = () => {
  const [buttonClicked, setButtonClicked] = useState({
    isOpen: false,
    title: "",
  });
  function SideButtonClicked(param) {
    if (buttonClicked.title === param.title) {
      setButtonClicked({ isOpen: !buttonClicked.isOpen, title: param.title });
    } else {
      setButtonClicked({ isOpen: true, title: param.title });
    }
  }
  return (
    <div className=" bg-colorSidebar flex">
      <div className="border-r-2 flex text-white px-3 flex-col py-10 justify-between pt-10">
        <div className=" space-y-6">
          <SidebarIcon
            onClick={() => SideButtonClicked({ title: "Home" })}
            label="Home"
          >
            <FaHome className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px]" />
          </SidebarIcon>

          <SidebarIcon
            onClick={() => SideButtonClicked({ title: "Setting" })}
            label="Setting"
          >
            <FaHome className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px]" />
          </SidebarIcon>

          <SidebarIcon
            onClick={() => SideButtonClicked({ title: "Courses" })}
            label="Courses"
          >
            <FaHome className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px]" />
          </SidebarIcon>
          <SidebarIcon
            onClick={() => SideButtonClicked({ title: "Calendar" })}
            label="Calendar"
          >
            <FaHome className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px]" />
          </SidebarIcon>
          <SidebarIcon
            onClick={() => SideButtonClicked({ title: "Student" })}
            label="Student"
          >
            <FaHome className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px]" />
          </SidebarIcon>
        </div>
        <div className="">
          <SidebarIcon
            onClick={() => SideButtonClicked({ title: "Profile" })}
            label="Profile"
          >
            <FaHome className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] xl:w-[45px] xl:h-[45px]" />
          </SidebarIcon>
        </div>
      </div>
      {buttonClicked.isOpen && <SubIcon buttonClicked={buttonClicked} />}
    </div>

  );
};

export default Sidebar;
