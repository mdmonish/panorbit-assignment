import React from "react";

const TabButton = () => {
  return (
    <div className="bg-[#3C58C9] absolute top-2 right-[-40px]">
      <div className="bg-white">
        <div className="bg-[#3C58C9] rounded-br-3xl"></div>
      </div>
      <div className="bg-white w-8 h-10 ml-auto rounded-l-full text-black text-center"></div>

      <div className="bg-white">
        <div className="bg-[#3C58C9] rounded-tr-3xl"></div>
      </div>
    </div>
  );
};

export default TabButton;
