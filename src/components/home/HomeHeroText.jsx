import React from "react";
import Videos from "./Videos";

const HomeHeroText = () => {
  return (
    <div className="text-center bg-gradient-to-r from-slate-100/5 via-gray-100 to-white-400 text-transparent bg-clip-text font-bold">
      <div className="text-[9.5vw] leading-[8vw] uppercase flex items-center justify-center">L'étincelle</div>
      <div className="text-[9.5vw] leading-[8vw] uppercase flex items-center justify-center">
        qui
        <div className="h-[8vw] w-[18vw] p-1">
          <Videos/>
        </div>
        génère
      </div>
      <div className="text-[9.5vw] leading-[8vw] uppercase flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
