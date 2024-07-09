import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Sidebar = ({ isSidebarCollapsed }) => {
  return (
    <div className={`flex h-screen ${isSidebarCollapsed ? "w-24" : "w-64"} bg-transparent p-4 text-white h-screen fixed`}>
      {/* Left Column -> Sidebar */}
      <div className={`flex flex-col gap-3 ${isSidebarCollapsed ? "hidden" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? 'bg-orange-800' : ''} rounded-lg flex items-center gap-4 w-48 p-2`}
        >
          <IoMdHome className="h-6 w-6" />
          {!isSidebarCollapsed && "Home"}
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) => `${isActive ? 'bg-orange-800' : ''} flex items-center gap-3 rounded-xl w-48 p-2`}
        >
          <FaHistory className="h-6 w-6" />
          {!isSidebarCollapsed && "History"}
        </NavLink>
      </div>

      <div className={`flex flex-col gap-3 ${isSidebarCollapsed ? "" : "hidden"}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? 'bg-orange-800' : ''} rounded-lg flex items-center gap-3 p-2`}
        >
          <SiYoutubeshorts className="h-6 w-6" />
          {!isSidebarCollapsed && "Shorts"}
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) => `${isActive ? 'bg-orange-800' : ''} rounded-lg flex items-center gap-3 p-2`}
        >
          <FaHistory className="h-6 w-6" />
          {!isSidebarCollapsed && "History"}
        </NavLink>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isSidebarCollapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
