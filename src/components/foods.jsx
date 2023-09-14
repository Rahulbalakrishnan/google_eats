import React, { useState } from "react";
import { data } from "../data/data";
import string from "../strings.json";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="font-bold font-product-sans max-w-[1640px] m-auto px-4 py-10">
      <h1 className=" text-orange-600 text-center text-4xl font-bold ">
        {string.pick}
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              {string.all}
            </button>
            <button
              onClick={() => filterType(`burger`)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              {string.burger}
            </button>
            <button
              onClick={() => filterType(`pizza`)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              {string.pizza}
            </button>
            <button
              onClick={() => filterType(`salad`)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              {string.salad}
            </button>
            <button
              onClick={() => filterType(`chicken`)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              {string.chicken}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-t-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
