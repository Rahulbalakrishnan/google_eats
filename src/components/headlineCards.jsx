import React from "react";
import string from "../strings.json";

const headlineCards = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 font-product-sans font-bold ">
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-4xl px-2 pt-4">{string.bf}</p>
          <p className="px-2">{string.bf_p}</p>
          <button
            onClick={scrollDown}
            className="border-white bg-white text-black mx-2 absolute bottom-4"
          >
            {string.ord}
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-4xl px-2 pt-4">{string.lh}</p>
          <p className="px-2">{string.lh_p}</p>
          <button
            onClick={scrollDown}
            className="border-white bg-white text-black mx-2 absolute bottom-4"
          >
            {string.ord}
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-4xl px-2 pt-4">{string.dn}</p>
          <p className="px-2">{string.dn_p}</p>
          <button
            onClick={scrollDown}
            className="border-white bg-white text-black mx-2 absolute bottom-4"
          >
            {string.ord}
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/812860/pexels-photo-812860.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default headlineCards;
