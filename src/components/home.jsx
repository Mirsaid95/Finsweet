import React from "react";
import { Button } from "./Button/Button";
import headerImg from "../assets/image/Image.png";
import { data } from "../Data/data";

export const Home = () => {
  console.log(data);
  return (

    <div>
      <header className="bg-[#232536] pt-4">
        <div className="max-w-[1240px] mx-auto p-2 flex flex-col-reverse  md:flex-row items-center md:gap-10">
          <div className="flex flex-col gap-3 md:flex-1">
            <h1 className="text-[24px] font-bold text-white md:text-[34px] lg:text-[56px]">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-white text-[8px] md:text-[18px] lg:text-[22px]">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <Button
              text={"Request A Quote"}
              className={
                "text-xs md:w-[135px] md:h-[40px] flex items-center justify-center"
              }
            ></Button>
          </div>
          <div className="header__image w-full md:flex-1">
            <img
              src={headerImg}
              alt="headerImage"
              className="w-full object-cover"
            />
          </div>
        </div>
      </header>
      <section className="container mx-auto">
        <div>
          <div className="flex flex-col gap-2">
            <h6 className="font-medium text-sm uppercase text-[#000] tracking-wide">ABOUT US</h6>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-[20px] leading-6 text-[#232536] tracking-wide">
                The company leads entire webdesign process from concept to
                delivery.
              </h1>
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] leading-6 text-[#232536] font-semibold">The Era Of Technology.</h4>
                <p className="font-normal text-[12px] tracking-wide text-[#5d5f6d]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him case in packages enquire we up
                  ecstatic unsatiable saw his giving Remain expense you position
                  concluded.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {
              data.aboutUs.map((item) => (
                <div key={item.id}>
                  <img src={item.img} alt="image"/>
                </div>
              ))
            }
            
          </div>
        </div>
      </section>
    </div>
  );
};
