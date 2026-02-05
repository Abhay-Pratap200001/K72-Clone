import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <Link className="hover:text-green-600 hover:border-green-500  transition duration-200  text-[6vw] border-1 leading-[6vw] border-white rounded-full px-3 uppercase relative bottom-1">
        <span className="relative bottom-[3px]">Projects</span>
      </Link>
      <Link className="hover:text-green-600 hover:border-green-500 transition duration-200 text-[6.5vw] border-1 leading-[6vw] border-white rounded-full px-3 uppercase relative bottom-1">
        <span className="relative bottom-[3px]">Agence</span>
      </Link>
    </div>
  );
};

export default HomeBottom;
