import React from "react";
import { data } from "../Data/data";
import headerImg from "../assets/image/Image.png";
import { Button } from "./Button/Button";
import { MdOutlineArrowRightAlt } from "react-icons/md";


export const Home = () => {
  console.log(data);
  return (
    <div>
      <header className="bg-[#232536] pt-4">
        <div className="max-w-[1240px] mx-auto p-2 flex flex-col-reverse  md:flex-row items-center md:gap-10">
          <div className="flex flex-col gap-3 md:flex-1">
            <h1 className="text-[24px] font-bold text-white md:text-[34px] lg:text-[56px] tracking-wide">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-white text-[12px] md:text-[18px] lg:text-[22px]">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <Button
              text={"Request A Quote"}
              className={
                "w-[155px] h-[40px] flex items-center justify-center text-[12px] md:flex gap-2 md:w-[200px] md:h-[54px] md:text-[18px]"
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
      <section className="aboutUs pt-10 pb-16">
        <div className="max-w-[1024px] mx-auto p-2 flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2 lg:gap-6">
            <h6 className="font-medium text-sm uppercase text-[#000] tracking-wide">
              ABOUT US
            </h6>
            <div className="flex flex-col gap-2 md:gap-4 lg:flex-row lg:items-center">
              <h1 className="font-semibold text-[20px] leading-6 text-[#232536] lg:text-[46px] lg:leading-none md:-tracking-wider">
                The company leads entire webdesign process from concept to
                delivery.
              </h1>
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] leading-6 text-[#232536] font-semibold lg:text-[36px] tracking-wide">
                  The Era Of Technology.
                </h4>
                <p className="font-normal text-[12px] tracking-wide text-[#5d5f6d] lg:text-[16px]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him case in packages enquire we up
                  ecstatic unsatiable saw his giving Remain expense you position
                  concluded.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-grow gap-2 items-center">
            {data.aboutUs.map((item) => (
              <div key={item.id} className="">
                <img
                  src={item.img}
                  alt="image"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[36px] text-[#232536]">1560+</h1>
                <div className="flex items-center w-full">
                  <div className="bg-blue-600 w-1/6 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-3/6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-2/6 h-2">&nbsp;</div>
                </div>
                <p className="font-normal text-[16px] leading-4 text-[#000]">
                  Project Delivered
                </p>
              </div>
              <div className="w-[105px] flex flex-col gap-2">
                <h1 className="font-bold text-[36px] text-[#232536]">100+</h1>
                <div className="flex items-center w-full">
                  <div className="bg-blue-600 w-1/6 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-3/6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-2/6 h-2">&nbsp;</div>
                </div>
                <p className="font-normal text-[16px] leading-4 text-[#000]">
                  Professional
                </p>
              </div>
              <div className="w-[105px] flex flex-col gap-2">
                <h1 className="font-bold text-[36px] text-[#232536]">950+</h1>
                <div className="flex items-center w-full">
                  <div className="bg-blue-600 w-1/6 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-3/6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-2/6 h-2">&nbsp;</div>
                </div>
                <p className="font-normal text-[16px] leading-4 text-[#000]">
                  Happy Client
                </p>
              </div>
              <div className="w-[105px] flex flex-col gap-2">
                <h1 className="font-bold text-[36px] text-[#232536]">10yrs</h1>
                <div className="flex items-center w-full">
                  <div className="bg-blue-600 w-1/6 h-2">&nbsp;</div>
                  <div className="bg-orange-200 w-3/6 h-2">&nbsp;</div>
                  <div className="bg-orange-400 w-2/6 h-2">&nbsp;</div>
                </div>
                <p className="font-normal text-[16px] leading-4 text-[#000]">
                  Experience
                </p>
              </div>
            </div>
            <ul>
              <li className="text-blue-500 text-[12px]">
                <a href="#" className="flex items-center gap-4 text-[18px]">Read abobut us <MdOutlineArrowRightAlt/></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="ourExpertise bg-[#ecf8f9] pt-10 pb-10">
        <div className="max-w-[1024px] mx-auto p-2">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
            <div className="flex flex-col gap-4 text-center md:text-start md:w-[70%] lg:w-[100%]">
              <h6 className="text-[#000] uppercase text-[12px] font-medium tracking-wider">
                Our expertise
              </h6>
              <h1 className="font-semibold text-[20px] md:text-[28px] lg:text-[42px] lg:tracking-wide">
                We want to get local identification in every corner of the world
                in this era of global citizenship
              </h1>
              <p className="text-[12px]">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 relative">
              {data.ourExpertise.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white p-4">
                  <div className="flex-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#FFE6D2]">
                    <img src={item.img} alt=""/>
                  </div>
                  <div className="flex-1 flex-col gap-2">
                    <h1 className="font-bold text-[12px]">{item.title}</h1>
                    <p className="text-[#5d5f6d] text-[12px] font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-0 flex items-center w-full">
                <div className="bg-blue-600 w-1/6 h-2">&nbsp;</div>
                <div className="bg-orange-200 w-3/6 h-2">&nbsp;</div>
                <div className="bg-orange-400 w-2/6 h-2">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourServices bg-[#ffe6d2] pt-10 pb-10">
              <div className="max-w-[1024px] mx-auto p-2 flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-center md:text-start">
                  <h6 className="text-[#000] uppercase text-[12px] font-medium tracking-wider md:text-[14px]">OUR SERVICES</h6>
                  <h1 className="font-semibold text-[24px] md:text-[48px] md:w-[80%]">We build software solutions that solve client's business challenges</h1>
                  <Button text={"Start a Project"} className={"hidden text-[12px] md:flex items-center justify-center gap-2 md:w-[200px] md:h-[54px] md:text-[18px]"}></Button>
                </div>
                <div className="flex flex-wrap gap-4 md:flex-nowrap">
                  {
                    data.ourService.map((item) => (
                      <div className="bg-white flex flex-col gap-4 p-4 shadow-2xl">
                        <div className="bg-[#FFE6D2] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                          <img src={item.img} alt="Icon-icon" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h1 className="font-bold text-[12px]">{item.title}</h1>
                          <p className="text-[#5d5f6d] text-[12px] font-medium">{item.description}</p>
                          <ul>
                            <li className="text-blue-500">
                              <a href="#" className="flex items-center gap-2">Read more <MdOutlineArrowRightAlt/></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                  }
                  <Button text={"Start a Project"} className={"w-[150px] h-[45px] md:hidden text-[12px] flex items-center justify-center gap-2"}></Button>
                </div>
              </div>
      </section>
    </div>
  );
};
