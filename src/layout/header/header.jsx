import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data"
import { LuAlignJustify } from "react-icons/lu";
import { useState } from "react";



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#232536] sticky top-0 z-10">
      <div className="max-w-[1240px] mx-auto h-[80px] flex items-center p-2 justify-between shadow-[3px_18px_15px_-25px_rgba(250,250,250,250)]">
        <div className="flex items-center w-full justify-between">
          <Link to={data.navigation[0].link}>
            <img
              src={data.navigation[0].img}
              alt="Logo"
              className="w-[100px] md:w-[100%]"
            />
          </Link>
          <ul className="hidden gap-8 md:flex">
            {data.navigation.slice(1).map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-[#FFFFFF] hover:text-white transitio hover:border-b-2 text-[18px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <LuAlignJustify
          className="w-6 h-6 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div
        className={`fixed inset-0 z-50 top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-4 text-xl "
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <ul className="mt-[100px] space-y-4 p-4">
          {data.navigation.slice(1).map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="block p-2 hover:bg-gray-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
