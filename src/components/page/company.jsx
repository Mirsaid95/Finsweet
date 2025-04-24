import React from "react";
import { data } from "../../Data/data.js";
import ShapesRight from "../../assets/ShapesRight.svg";

export const Company = () => {
  return (
    <div>
      <header className="max-w-[1024px] mx-auto p-2 pt-10 pb-10">
        <div className="relative flex flex-col gap-8 items-center justify-center text-center">
          <span className="absolute top-0 right-0">
            <img src={ShapesRight} alt="" />
          </span>
          <div className="absolute top-0 left-0 w-[25px] h-[25px] bg-[#FFD3AF]"></div>
          <div className="flex flex-col gap-2 pt-10 lg:text-start">
            <p className="text-[#232536] text-[12px] uppercase font-medium">
              Company
            </p>
            <h1 className="text-[#232536] text-[20px] md:text-[32px] lg:text-[48px] font-bold tracking-wide lg:leading-[1.2] lg:w-[70%]">
              Award-winning Company seen and used by millions around the world.
            </h1>
            <p className="text-[#232536] text-[12px] md:text-[16px] lg:text-[20px] font-normal tracking-wide lg:w-[80%] ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.{" "}
            </p>
          </div>
          <div className="relative flex gap-2 pt-4">
            {data.aboutUs.map((item, index) => (
              <div key={item.id}>
                <div>
                  <img src={item.img} alt="image" className="w-full" />
                </div>
                {index === data.aboutUs.length - 1 && (
                  <div
                    className="absolute top-2 right-0 flex items-center"
                    key={index.id}
                  >
                    <div className="bg-orange-400 w-3 h-2 md:w-6 lg:w-8">
                      &nbsp;
                    </div>
                    <div className="bg-orange-200 w-5 h-2 md:w-12 lg:w-14">
                      &nbsp;
                    </div>
                    <div className="bg-blue-500 w-4 h-2 md:w-8 lg:w-12">
                      &nbsp;
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
      <section className="story">
        <div className="max-w-[1024px] mx-auto p-2 pt-10 pb-10">
          <div className="relative gap-6 text-center grid grid-cols-1 md:grid-cols-2 md:text-start">
            <div className="absolute top-0 left-0 bg-blue-500 w-[25px] h-[25px]"></div>
            <div className="pt-10 flex flex-col gap-3">
              <p>Our Story 👇</p>
              <h1>From Startups to Titans of Industryh1</h1>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic unsatiable saw his giving Remain expense of gay
                produce excited perceived do an a china mean its so ye when in
                explained Hearts am next over match mr partiality not shoud
                latter thus as out no passed forming middleton exercise up
              </p>
            </div>
            <div className="bg-[#ffd3af72] grid grid-cols-2 gap-4 text-start">
              <div className="w-full flex flex-col pl-6">
                <h1 className="font-bold text-[28px] text-[#232536]">1560+</h1>
                <div className="flex">
                  <div className="bg-blue-600 w-4 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-6 h-2">&nbsp;</div>
                </div>
                <p className="text-[12px] text-[#000]">
                  Project Delivered
                </p>
              </div>
              <div className="w-full flex flex-col pl-6">
                <h1 className="font-bold text-[28px] text-[#232536]">100+</h1>
                <div className="flex">
                  <div className="bg-blue-600 w-4 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-6 h-2">&nbsp;</div>
                </div>
                <p className="font-normal text-[12px] text-[#000]">
                  Professional
                </p>
              </div>
              <div className="w-full flex flex-col pl-6">
                <h1 className="font-bold text-[28px] text-[#232536]">950+</h1>
                <div className="flex items-center w-full">
                  <div className="bg-blue-600 w-4 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-6 h-2">&nbsp;</div>
                </div>
                <p className="font-normal text-[12px] text-[#000]">
                  Happy Client
                </p>
              </div>
              <div className="w-full flex flex-col pl-6">
                <h1 className="font-bold text-[28px] text-[#232536]">10yrs</h1>
                <div className="flex items-center w-full">
                  <div className="bg-blue-600 w-4 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-6 h-2">&nbsp;</div>
                </div>
                <p className="font-normal text-[12px] text-[#000]">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
