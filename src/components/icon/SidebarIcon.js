import React from "react";

const SidebarIcon = ({ children, onClick, label }) => {
  return (
    
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer hover:opacity-80">
        
      {/* Icon */}
        {children}
      {/* Icon */}

      <p className="font-poppins font-medium text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        {label}
      </p>
    </div>
  );
};

export default SidebarIcon;
