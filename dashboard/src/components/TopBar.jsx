import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full h-16 flex items-center shadow-sm z-10 bg-white">
      <div className="flex items-center space-x-6 px-4 border-r pr-6">
        <div className="flex items-center space-x-2">
          <p className="text-xs font-medium uppercase text-gray-600">
            NIFTY 50
          </p>
          <p className="text-sm font-medium text-red-500">{100.2}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs font-medium uppercase text-gray-600">SENSEX</p>
          <p className="text-sm font-medium text-red-500">{100.2}</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
