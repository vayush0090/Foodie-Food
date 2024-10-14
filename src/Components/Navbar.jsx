import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-2 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl font-bold">Foodie Foods</h1>
      </div>
      <div>
        <input
          className="border border-gray-600 rounded-lg p-3 text-sm outline-none w-full lg:w-[25vw]"
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
        />
      </div>
    </nav>
  );
};

export default Navbar;
