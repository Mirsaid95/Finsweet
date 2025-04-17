import React from "react";
import { Button } from "../Button/Button";
import ShapesRight from "../../assets/ShapesRight.svg";
import  data  from "../data/data"
import Feature from "../../assets/image/Feature.png";
import Feature1 from "../../assets/image/Feature-1.png";
import Feature2 from "../../assets/image/Feature-2.png";
import Feature3 from "../../assets/image/Feature-3.png";
// import Feature4 from "../../assets/image/Feature-4.png";
// import Feature5 from "../../assets/image/Feature-5.png";

const Service = () => {
  return (
    <div className="service ">
      <section className="service-section bg-[#FFE6D2]">
        <div className="max-w-[1024px] mx-auto p-2 pt-10 pb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-col gap-4 text-center items-center md:text-start md:items-start md:flex-1">
              <p className="text-[12px] tracking-wider uppercase font-medium text-[#232536]">
                Our Services
              </p>
              <h1 className="text-[#232536] text-[18px] font-medium leading-6 tracking-wider md:text-[28px] md:leading-8 lg:text-[38px]">
                We Build Software Solutionthat Solve Clients Business Challenges
              </h1>
              <p className="text-[#232536] text-[12px] tracking-wide leading-4 md:text-[16px] ">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic.
              </p>
              <Button
                text="Request A Quote"
                className={
                  "hidden text-[12px] md:flex items-center gap-2 w-[200px] justify-center h-[54px]"
                }
              />
            </div>
            <div className="flex flex-col gap-2 text-center items-center md:flex-1">
              <p className="text-[12px] text-[#232536] font-medium tracking-wide md:text-[16px] md:font-medium lg:text-[18px] lg:font-medium">
                Technical support
              </p>
              <p className="text-[12px] text-[#232536] font-medium tracking-wide md:text-[16px] md:font-medium lg:text-[18px] lg:font-medium">
                Development
              </p>
              <p className="text-[12px] text-[#232536] font-medium tracking-wide md:text-[16px] md:font-medium lg:text-[18px] lg:font-medium">
                AWS/Azure
              </p>
              <p className="text-[12px] text-[#232536] font-medium tracking-wide md:text-[16px] md:font-medium lg:text-[18px] lg:font-medium">
                Consulting
              </p>
              <p className="text-[12px] text-[#232536] font-medium tracking-wide md:text-[16px] md:font-medium lg:text-[18px] lg:font-medium">
                Information technology
              </p>
              <Button
                text="Request A Quote"
                className={
                  "text-[12px] flex items-center gap-2 w-[150px] justify-center h-[40px] md:hidden"
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-10">
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
      <section className="technical-support">
        <div className="max-w-[1024px] mx-auto p-2 pt-10 pb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-col gap-4 text-center md:text-start flex-1">
              <p className="text-[12px] tracking-wider uppercase font-medium text-[#232536]">
                Technical support
              </p>
              <h1 className="text-[#232536] text-[20px] font-medium leading-6 tracking-wider md:text-[36px] md:font-semibold md:leading-8 lg:leading-none lg:text-[48px] lg:tracking-widest">
                Best in class tech support for your company. We become your tech
                backbone{" "}
              </h1>
              <p className="text-[#232536] text-[12px] tracking-wide leading-5 md:text-[18px] lg:leading-6 ">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
                Through True Rich Attended does no end it his mother since real
                had half every.
              </p>
            </div>
            <div className="flex-1">
              <img src={Feature} alt="Feature" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="development bg-[#ECF8F9]">
        <div className="max-w-[1024px] mx-auto p-2 pt-10 pb-10">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:items-center">
                <div className="development-image h-full flex-1">
                    <img src={Feature1} alt="image" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-4 text-center md:text-start md:flex-1">
                    <p className="text-[12px] tracking-wider uppercase font-medium text-[#232536]">Development</p>
                    <h1 className="text-[#232536] text-[20px] leading-8 font-medium tracking-wider md:text-[32px] md:font-semibold lg:text-[46px] lg:tracking-wider lg:leading-10">Bring your ideas to reality with certified team of developers, working with latest technologies </h1>
                    <p className="text-[#232536] text-[12px] tracking-wide md:text-[16px] lg:leading-6 lg:text-[18px]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                </div>
            </div>
        </div>
      </section>
      <section className="aws-azure">
              <div className="max-w-[1024px] mx-auto p-2 pt-10 pb-10">
                <div className="flex flex-col gap-4 md:flex-row md:gap-8 text-center md:text-start md:items-center">
                    <div className="flex flex-col gap-4 flex-1">
                        <p className="text-[#232536] text-[12px] font-semibold uppercase md:normal-case">AWS/Azure</p>
                        <h1 className="text-[#232536] text-[20px] font-semibold tracking-wide md:text-[32px] leading-8 lg:text-[46px] lg:leading-none">We help you deploy, manage and secure your application on leading web services</h1>
                        <p className="text-[#232536] text-[12px] tracking-wide md:text-[16px] lg:text-[18px]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                    </div>
                    <div className="azure-image flex-1">
                        <img src={Feature2} alt="" className="w-full" />
                    </div>
                </div>
              </div>
      </section>
      <section className="consulting bg-[#ECF8F9]">
              <div className="max-w-[1024px] mx-auto p-2 pt-10 pb-10">
                <div className="flex flex-col gap-4 md:flex-row md:gap-8 text-center md:items-center">
                    <div className="consulting-image flex-1">
                        <img src={Feature3} alt="image" className="w-full"/>
                    </div>
                    <div className="flex flex-col gap-4 text-center md:text-start md:flex-1">   
                        <p className="text-[#232536] text-[12px] font-semibold uppercase tracking-wider">Consulting</p>
                        <h1 className="text-[#232536] text-[20px] font-semibold tracking-wide md:text-[32px] lg:text-[46px]">Get advice from world class professionals</h1>
                        <p className="text-[#232536] text-[12px] tracking-wide md:text-[16px] lg:text-[18px]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                    </div>
                </div>
              </div>
      </section>
    </div>
  );
};

export default Service;