import React from "react";
import Shapes from "../../assets/Shapes";
import { MdOutlineArrowRightAlt } from "react-icons/md";



export const Button = ({ text, imageUrl, onClick, className }) => {
  return (
    <button className={`relative bg-[#444CFC] text-white w-[125px] h-[34px] ${className}`}>
      {imageUrl && <img src={imageUrl} alt="button-image" />}
      {text}
        <span className="absolute left-0 top-0"><Shapes/></span>
        <MdOutlineArrowRightAlt/>
    </button>
  );
};
