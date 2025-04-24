import React from "react";
import { data } from "../Data/data.js";
import headerImg from "../assets/image/Image.png";
import ShapesRight from "../assets/ShapesRight.svg";
import ourQuote from "../assets/ourQuote.svg";
import { Button } from "./Button/Button";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Home = () => {
  // console.log(data);
  return (
    <div>
      <header className="bg-[#232536] pt-4">
        <div className="max-w-[1240px] mx-auto p-2 flex flex-col-reverse  md:flex-row items-center md:gap-10">
          <div className="flex flex-col gap-3 md:flex-1">
            <h1 className="text-[24px] font-bold text-white md:text-[34px] lg:text-[56px] tracking-wide">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-white text-[14px] md:text-[18px] lg:text-[22px]">
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
                <a href="#" className="flex items-center gap-4 text-[18px]">
                  Read abobut us <MdOutlineArrowRightAlt />
                </a>
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
              <p className="text-[12px] text-[#232536] md:text-[16px] lg:text-[18px]">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 relative">
              {data.ourExpertise.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white p-4">
                  <div className="flex-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#FFE6D2]">
                    <img src={item.img} alt="" />
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
            <h6 className="text-[#000] uppercase text-[12px] font-medium tracking-wider md:text-[14px]">
              OUR SERVICES
            </h6>
            <h1 className="font-semibold text-[24px] md:text-[48px] md:w-[80%]">
              We build software solutions that solve client's business
              challenges
            </h1>
            <Button
              text={"Start a Project"}
              className={
                "hidden text-[12px] md:flex items-center justify-center gap-2 md:w-[200px] md:h-[54px] md:text-[18px]"
              }
            ></Button>
          </div>
          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            {data.ourService.map((item) => (
              <div
                key={item.id}
                className="bg-white flex flex-col gap-4 p-4 shadow-2xl"
              >
                <div className="bg-[#FFE6D2] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <img src={item.img} alt="Icon-icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-[12px]">{item.title}</h1>
                  <p className="text-[#5d5f6d] text-[12px] font-medium">
                    {item.description}
                  </p>
                  <ul>
                    <li className="text-blue-500">
                      <a href="#" className="flex items-center gap-2">
                        Read more <MdOutlineArrowRightAlt />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
            <Button
              text={"Start a Project"}
              className={
                "w-[150px] h-[45px] md:hidden text-[12px] flex items-center justify-center gap-2"
              }
            ></Button>
          </div>
        </div>
      </section>
      <section className="oruProcess pt-10 pb-10">
        <div className="max-w-[1024px] mx-auto p-2">
          <div className="flex flex-col gap-4">
            <div className="relative flex flex-col gap-2 text-center md:text-start">
              <h6 className="text-[#000] uppercase text-[12px] font-medium tracking-wider md:text-[14px]">
                Our Process
              </h6>
              <h1 className="font-semibold text-[24px] md:text-[48px] md:w-[70%]">
                The process we are working With Our client Worldwide
              </h1>
              <p className="text-[12px] text-[#232536] md:text-[16px] lg:text-[18px] md:w-[70%]">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable.
              </p>
              <span className="absolute top-2 right-0">
                <img src={ShapesRight} alt="" />
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.ourProcess.map((item, index) => (
                <div key={item.id} className="relative border p-4">
                  {index === 0 && (
                    <div className="absolute top-0 left-0 w-full flex">
                      <div className="bg-orange-500 h-2 w-full">&nbsp;</div>
                      <div className="bg-orange-200 h-2 w-full">&nbsp;</div>
                      <div className="bg-blue-500 h-2 w-full">&nbsp;</div>
                    </div>
                  )}
                  {index === data.ourProcess.length - 1 && (
                    <div className="absolute bottom-0 left-0 w-full flex">
                      <div className="bg-orange-500 h-2 w-full">&nbsp;</div>
                      <div className="bg-orange-200 h-2 w-full">&nbsp;</div>
                      <div className="bg-blue-500 h-2 w-full">&nbsp;</div>
                    </div>
                  )}
                  <div className="flex flex-col gap-4">
                    <div className="w-[50px] h-[50px] bg-orange-200 rounded-full flex items-center justify-center">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div>
                      <h1 className="font-bold text-[16px]">{item.title}</h1>
                      <p className="text-[12px] font-medium text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <p className="absolute top-2 right-3 text-gray-300 text-right font-bold text-[26px]">
                    {item.num}
                  </p>
                  {/* <span class="absolute right-0 top-1/2 w-full h-px border-dashed border-t border-gray-300 translate-y-[-50%]"></span> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="ourCustomers bg-[#F9F9FF] pt-10 pb-10">
        <div className="max-w-[1024px] mx-auto p-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative flex flex-col gap-4">
            <div className="absolute -top-6 left-0 bg-[#666DFF] w-[16px] h-[16px]">
              &nbsp;
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#232536] font-semibold text-[22px] md:text-[36px] lg:text-[48px] md:w-[90%]">
                Our customers love what we do
              </h1>
              <h6 className="text-[#232536] text-[16px] font-medium md:text-[24px] lg:text-[30px]">
                Transform your idea into reality with finsweet
              </h6>
              <p className="text-[#232536] text-[12px] font-normal tracking-wide md:text-[18px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
            <div className="flex">
              {data.usersPhoto.map((item) => (
                <div key={item.id}>
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium text-[16px] md:text-[18px]">30+</p>
              <p className="text-[16px] md:text-[18px]">Customer Reviews</p>
            </div>
          </div>

          <div className=" relative flex flex-col gap-4 bg-white p-6 h-[350px] justify-center">
            <div className="absolute -top-4 right-10">
              <img src={ourQuote} alt="" />
            </div>
            <div className="flex gap-4 absolute -bottom-4 left-[35%] translate-x-[50%] translate-y-[50%]">
              <div className="bg-slate-400 w-[10px] h-[10px] rounded-full hover:bg-slate-900 cursor-pointer">
                &nbsp;
              </div>
              <div className="bg-slate-400 w-[10px] h-[10px] rounded-full hover:bg-slate-900 cursor-pointer">
                &nbsp;
              </div>
              <div className="bg-slate-400 w-[10px] h-[10px] rounded-full hover:bg-slate-900 cursor-pointer">
                &nbsp;
              </div>
            </div>
            <div className="absolute top-0 left-0">
              <div className="bg-blue-600 w-4 h-[80px]">&nbsp;</div>
              <div className="bg-orange-200 w-4 h-[150px]">&nbsp;</div>
              <div className="bg-orange-400 w-4 h-[120px]">&nbsp;</div>
            </div>
            <h1 className="text-[18px] md:text-[24px] font-semibold text-[#232536]">
              Finsweet has been a wonderful partner to work with. I have been a
              customer now for the past few months now and I have had nothing
              but positive experiences!
            </h1>
            <div className="flex items-center gap-2">
              {data.usersPhoto.map(
                (item) =>
                  item.id === 1 && (
                    <div key={item.id}>
                      <img src={item.img} alt="image" />
                    </div>
                  )
              )}
              <div className="flex flex-col">
                <h1 className="font-semibold text-[18px]">Johnny Andro</h1>
                <p className="text-[12px] text-[#23253681]">
                  Director, Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#ECF8F9] pt-10 pb-10">
        <div className="relative max-w-[1024px] md:h-[50vh] mx-auto p-2 flex flex-col gap-4 justify-center">
          <div className="absolute -top-2 left-2 w-[15px] h-[15px] bg-[#666DFF]">
            &nbsp;
          </div>
          <h1 className="text-[#232536] font-semibold text-[22px] md:text-[34px] lg:text-[48px]">
            Read our latest blogs & news
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {data.blogNews.map((item) => (
              <div
                key={item.id}
                className="bg-white flex flex-col gap-2 md:flex-row"
              >
                <div className="w-full md:w-[60%] md:h-full">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full object-cover md:h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 p-2 md:justify-center">
                  <p className="text-[14px] text-[#23253683] font-medium">
                    {item.calendarData.toLocaleDateString("en-Us", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h1 className="text-[18px] text-[#232536] font-semibold">
                    {item.title}
                  </h1>
                  <ul>
                    <li className="text-blue-500">
                      <a
                        href="#"
                        className="text-[14px] flex items-center gap-2"
                      >
                        Read More <MdOutlineArrowRightAlt />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
