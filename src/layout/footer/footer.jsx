import React from "react";
import ShapesFooter from "../../assets/ShapesFooter.svg";
import Shapessmall from "../../assets/Shapessmall.svg";
import logo from "../../assets/logoFooter.svg";
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer pt-10 pb-10">
      <div className="max-w-[1024px] mx-auto p-2">
        <div className="relative flex flex-col gap-4 bg-[#666DFF] p-8 h-[40vh] md:flex-row flex-1 md:items-center justify-center">
          <div className="flex flex-col absolute right-0 top-0 h-full">
            <div className="bg-orange-500 w-2 h-16">&nbsp;</div>
            <div className="bg-orange-200 w-2 h-24 xl:h-[140px]">&nbsp;</div>
            <div className="bg-blue-700 w-2 h-full xl:h-[87px]">&nbsp;</div>
          </div>
          <div className="absolute top-0 left-0">
            <img
              src={ShapesFooter}
              alt="Shapes"
              className="w-[62px] h-[56px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-[12px] text-white">NEWSLETTER</h6>
            <h1 className="text-[20px] font-semibold tracking-normal text-white md:text-[26px] lg:text-[38px]">
              Subscribe our News Letter to get Latest Updates.
            </h1>
          </div>
          <form>
            <input
              type="email"
              placeholder="Paresh@Pixeto.com"
              className="w-full h-[45px] p-2 text-[12px] md:w-[280px] lg:w-[400px]"
            />
          </form>
        </div>
        <div className="mt-[100px] flex flex-col gap-8">
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col gap-10 md:flex-cols-2">
              <span className="absolute -top-10 left-0">
                <img src={Shapessmall} alt="Shapes" />
              </span>
              <div className="flex flex-col gap-4">
                <h1 className="text-[22px] md:text-[32px] font-bold md:w-[80%] lg:text-[42px] lg:w[70%]">
                  Let's make something special
                </h1>
                <p className="text-black text-[18px] md:text-[24px] font-bold tracking-wide flex items-center gap-2">
                  Lets talk!
                  <span>🤙</span>
                </p>
                <p className="font-medium text-[16px] tetx-[#232536] tracking-wide">
                  020 7993 2905
                </p>
                <p className="font-medium text-[16px] tetx-[#232536] tracking-wide">
                  hi@finsweet.com
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 lg:gap-20">
              <div>
                <ul className="flex flex-col  gap-4 ">
                  <li className="font-semibold">
                    <a href="/">Home</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="/service">Service</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="/company">Company</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="/career">Career</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">News</a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-col  gap-4">
                  <li className="font-semibold">
                    <a href="#">Service</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Technical support</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Testing</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Development</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">AWS/Azure</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Consulting</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Information technology</a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-col  gap-4">
                  <li className="font-semibold">
                    <a href="#">Resourses</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">About us</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Testominal</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="#">Terms of use</a>
                  </li>
                  <li className="hover:text-blue-500">
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-4 flex gap-4 md:flex-row justify-between">
            <p className="text-[12px] font-medium border-t-2 md:w-[30%]">
              DLF Cybercity, Bhubaneswar, India, &52050
            </p>

            <div className="flex flex-col items-center gap-2 md:flex-row">
              <div className="flex">
                <div className="bg-orange-200 w-[20px] h-2">&nbsp;</div>
                <div className="bg-blue-500 w-[40px] h-2">&nbsp;</div>
              </div>
              <p className="text-[12px] tracking-wider leading-4 text-center">
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-200 flex flex-col gap-4 items-center md:flex-row md:justify-between p-2 mt-10">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <span>
              <img src={logo} alt="" />
            </span>
            <p className="text-[12px] md:text-[16px] lg:text-[18px]">
              ©2021 Finsweet
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaInstagram className="text-[20px] text-[#232536]" />
            <BsFacebook className="text-[20px] text-[#232536]" />
            <BsTwitter className="text-[20px] text-[#232536]" />
            <BsLinkedin className="text-[20px] text-[#232536]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
