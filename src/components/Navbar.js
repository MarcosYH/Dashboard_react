import React from "react";
import Profile from "../assets/Profil.png";
export default function Navbar() {
  return (
    <div className="bg-gray-200 p-4 flex justify-between">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border rounded-lg"
        />
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
      </div>
      <div className="flex items-center">
        <span className="text-gray-600 text-sm mr-2">John Doe</span>
        <img
          src={Profile}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}
