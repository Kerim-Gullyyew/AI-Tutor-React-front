import React from "react";

const InnerHeaderLayout = ({children}) => {
  return (
    <div className="border-2 border-gray-200 bg-colorBackground">
      <div className="flex items-center justify-between p-2 w-full">

        {children}
        
      </div>
    </div>
  );
};

export default InnerHeaderLayout;
