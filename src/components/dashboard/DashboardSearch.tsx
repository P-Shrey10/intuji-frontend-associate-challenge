import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaComment,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const DashboardSearch: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="relative w-full max-w-md mr-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <div className="relative cursor-pointer hover:text-blue-500">
            <FaBell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative cursor-pointer hover:text-blue-500">
            <FaComment className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <FaUser className="text-gray-600" />
            </div>
            <span className="text-gray-700 font-medium">Mirie Kiritani</span>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm text-gray-500">Signed in as</p>
                <p className="text-sm font-medium text-gray-900">
                  mirie.kiritani@example.com
                </p>
              </div>
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                  <FaUser className="text-gray-500" />
                  <span>Profile</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                  <FaCog className="text-gray-500" />
                  <span>Settings</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                  <FaSignOutAlt className="text-gray-500" />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardSearch;
