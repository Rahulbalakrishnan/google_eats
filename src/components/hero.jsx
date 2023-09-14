import React from "react";
import string from "../strings.json"
const hero = () => {
  return (
    <div className="font-product-sans font-bold max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className=" cursor-pointer absolute  text-white w-full h-full max-h[500px] bg-black/40 flex flex-col justify-center">
          <h1 className=" transition-transform transform hover:rotate-6 duration-300 text-white px-4 text-3xl sm:text-4xl md:text-6xl lg:text-7x font-bold">
            {string.order} <span className="text-orange-600 ">{string.here}</span>
          </h1>
          <h1 className="cursor-pointer transition-transform transform hover:-rotate-6 duration-300 px-4 text-3xl sm:text-4xl md:text-6xl lg:text-7x font-bold">
            <span className="text-orange-600 ">{string.see} </span>{string.desk}.
          </h1>
        </div> 
        <img
          className="w-full max-h-[500px] object-cover object-top"
          // src="https://images.unsplash.com/photo-1560863223-5c6d0237e4da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="main_image"
        />
      </div>
    </div>
  );
};

export default hero;
