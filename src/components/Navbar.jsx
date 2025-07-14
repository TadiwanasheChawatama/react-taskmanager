import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  
 
  const navItem = ({isActive})=>(
`${    isActive?
    "bg-indigo-100 py-1 px-5 rounded-md":
    "py-1 px-5 rounded-md"}`
  )

  return (
    <nav className="relative mx-auto p-6 bg-red-100">
      <div className="flex items-center justify-between">
        <div className="logo">
          <h1 className="text-indigo-900 text-4xl">Task Tracker</h1>
        </div>
        <div className="flex itemx-center justify-center gap-5">
          <NavLink className={navItem}  to="/">Home</NavLink>
          <NavLink className={navItem} to="/add-task">Add Task</NavLink>
          <NavLink className={navItem} to="/all-tasks">All Tasks</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
