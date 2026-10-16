
import React from "react";
import { NavLink } from "react-router";
import "./App.css";

function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "My Pets", path: "/pets" },
    { name: "Activities", path: "/activities" },
    { name: "Reports", path: "/reports" },
    // {name:"Login",path:'/login'}
  ];

  return (
    <div className="sidebar">
      <h2>🐾 PetCare</h2>

      {menu.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
