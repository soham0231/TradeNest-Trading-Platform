import {useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="flex-1 h-full px-4 flex items-center justify-between">
      <img src="logo.png" className="w-12" />
      <div className="flex items-center space-x-6">

        <ul className="flex items-center space-x-6">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={
                  selectedMenu === 0
                    ? "text-orange-500 text-sm"
                    : "text-gray-700 text-sm"
                }
              >
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p
                className={
                  selectedMenu === 1
                    ? "text-orange-500 text-sm"
                    : "text-gray-700 text-sm"
                }
              >
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p
                className={
                  selectedMenu === 2
                    ? "text-orange-500 text-sm"
                    : "text-gray-700 text-sm"
                }
              >
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p
                className={
                  selectedMenu === 3
                    ? "text-orange-500 text-sm"
                    : "text-gray-700 text-sm"
                }
              >
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p
                className={
                  selectedMenu === 4
                    ? "text-orange-500 text-sm"
                    : "text-gray-700 text-sm"
                }
              >
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p
                className={
                  selectedMenu === 6
                    ? "text-orange-500 text-sm"
                    : "text-gray-700 text-sm"
                }
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <div
          className="flex items-center cursor-pointer"
          onClick={handleProfileClick}
         >
           <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2 text-sm">
            ZU
           </div>
           <p className="text-sm text-gray-600">USERID</p>
        </div>
         
      </div>
    </div>
  );
};

export default Menu;
