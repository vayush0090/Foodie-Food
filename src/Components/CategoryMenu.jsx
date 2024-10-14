import React from "react";

const CategoryMenu = () => {
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth scroll lg:overflow-x-hidden">
        <button className="px-3 py-2 bg-gray-200 font-bold hover:bg-green-500 hover:text-white rounded-lg">
          All
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold hover:bg-green-500 hover:text-white rounded-lg">
          Lunch
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold hover:bg-green-500 hover:text-white rounded-lg">
          Breakfast
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold hover:bg-green-500 hover:text-white rounded-lg">
          Dinner
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold hover:bg-green-500 hover:text-white rounded-lg">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
