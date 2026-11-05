import React from "react";

import { NavLink } from "react-router-dom";

function SideBar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Tasks", path: "/tasks" },
    { name: "Projects", path: "/projects" },
    { name: "Analytics", path: "/analytics" },
    { name: "Calendar", path: "/calendar" },
    { name: "Team Members", path: "/team-members" },
  ];

  return (
    <div className="bg-white rounded-lg p-3">
      <p className="text-xs text-gray-400 px-3 py-2">MENU</p>

      <div className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideBar;