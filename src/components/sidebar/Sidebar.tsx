import React from "react";
import {
  FaHome,
  FaChartBar,
  FaCommentAlt,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaCalendarAlt,
  FaUser,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-64 bg-[#F9FAFB] text-gray-800 flex flex-col shadow-lg">
      <div className="p-4 flex items-center justify-center">
        <img src={Logo} alt="logo" className="w-24 h-24" />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-2">
          <SidebarItem
            icon={<FaHome className="w-4 h-4" />}
            label="Dashboard"
            link="/dashboard"
          />

          <SidebarItem
            icon={<FaCalendarAlt className="w-4 h-4" />}
            label="Schedule"
            link="/schedule"
          />

          <SidebarItem
            icon={<FaCommentAlt className="w-4 h-4" />}
            label="Message"
            link="/message"
          />

          <SidebarItem
            icon={<FaChartBar className="w-4 h-4" />}
            label="Analytics"
            link="/analytics"
          />

          <SidebarItem
            icon={<FaUsers className="w-4 h-4" />}
            label="Team"
            link="/team"
          />

          <div className="border-t border-gray-300 my-4 pt-4">
            <SidebarItem
              icon={<FaUser className="w-4 h-4" />}
              label="Profile"
              link="/profile"
            />

            <SidebarItem
              icon={<FaCog className="w-4 h-4" />}
              label="Settings"
              link="/settings"
            />
          </div>
        </div>
      </div>

      <div className="p-4">
        <SidebarItem
          icon={<FaInfoCircle className="w-4 h-4" />}
          label="Help"
          link="/help"
        />
        <SidebarItem
          icon={<FaSignOutAlt className="w-4 h-4" />}
          label="Logout"
          link="/logout"
        />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, link }) => {
  return (
    <Link to={link}>
      <div className="flex items-center space-x-3 hover:bg-purple-100 p-3 rounded-md cursor-pointer transition-all duration-200 group">
        <div className="text-[#614F7F] group-hover:text-purple-700">{icon}</div>
        <span className="text-[#614F7F] group-hover:text-purple-700">
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
