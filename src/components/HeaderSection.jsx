import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import phone from "../assets/images/phone.svg";
import girl from "../assets/images/girl.webp";

function Header() {
  const [open, setOpen] = useState(false);
  {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }
  const [currentTab, setCurrentTab] = useState("0");
  const tabs = [
    {
      id: 0,
      heading: "Hosting",
      title: "Premium Web Hosting for Your Website",
      para: "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
    },
    {
      id: 1,
      heading: "Domain",
      title: "Premium Web Hosting for Your Website 1",
      para: "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
    },
    {
      id: 2,
      heading: "SEO",
      title: "Premium Web Hosting for Your Website 2",
      para: "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
    },
    {
      id: 3,
      heading: "Email",
      title: "Premium Web Hosting for Your Website 3",
      para: "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
    },
  ];
  function handleTabClick(e) {
    setCurrentTab(e.target.id);
  }
  return (
    <>
      <div
        id="header"
        className="max-w-[1240px] mx-auto px-3 w-full flex flex-col items-center min-h-[781px] min-[1441px]:min-h-screen mb-12 lg:mb-0"
      >
        {/* navbar */}
        <nav className="h-[101px] min-[1200px]:pr-[78px] flex items-center lg:items-end w-full">
          <div className="h-[60px] flex justify-between w-full">
            <div className="flex">
              <ul className="flex items-center">
                <li>
                  <a href="#header" onClick={() => setOpen(false)}>
                    <img
                      className="w-[75px] h-[50px] min-[450px]:w-[91px] min-[450px]:h-[60px] z-10 relative"
                      src={logo}
                      alt="logo"
                    />
                  </a>
                </li>
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal ml-[33px] min-[992px]:ml-[65px] relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href="#section1"
                  >
                    Our Services
                  </a>
                </li>
              </ul>
              <ul className="ml-[33px] min-[992px]:ml-[65px] min-[1200px]:ml-[135px] flex gap-[33px] items-center">
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href="#section2"
                  >
                    About
                  </a>
                </li>
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href="#section3"
                  >
                    Blog&News
                  </a>
                </li>
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href="#footer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <ul className="flex gap-[30px] items-center">
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href="#footer"
                  >
                    Account
                  </a>
                </li>
                <li className="w-[1px] h-[19px] bg-[#DAD8D8] hidden min-[850px]:block"></li>
                <li>
                  <a
                    className="text-black font-poppins text-base not-italic font-semibold leading-normal"
                    href="tel:+2349067322844"
                  >
                    <ul className="gap-[6px] items-center hidden min-[850px]:flex">
                      <img
                        className="w-[20px] h-[20px]"
                        src={phone}
                        alt="phone"
                      />
                      <li>+2349067322844</li>
                    </ul>
                  </a>
                </li>
              </ul>
              {/* open/close navbar button */}
              <div
                className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] duration-300 flex-col min-[850px]:hidden items-center justify-between cursor-pointer relative z-10`}
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`w-full h-[5px] duration-300 bg-black rounded ${
                    open == false ? "" : "rotate-45"
                  }`}
                ></span>
                <span
                  className={`w-full h-[5px] duration-300 bg-black rounded ${
                    open == false ? "" : "rotate-[135deg] translate-y-[-20px]"
                  }`}
                ></span>
                <span
                  className={`w-full h-[5px] duration-300 bg-black rounded ${
                    open == false ? "" : "hidden"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </nav>
        {/* small screen navpage */}
        <ul
          className={`w-full h-full fixed flex min-[850px]:hidden justify-center items-center flex-col gap-10 bg-white z-[7] left-[-100%] duration-300 ${
            open == false ? "" : "left-[0%]"
          }`}
        >
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal min-[992px]:ml-[65px] relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#section1"
              onClick={() => setOpen(false)}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#section2"
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#section3"
              onClick={() => setOpen(false)}
            >
              Blog&News
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#footer"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#footer"
              onClick={() => setOpen(false)}
            >
              Account
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-base not-italic font-semibold leading-normal"
              href="tel:+2349067322844"
            >
              <ul className="gap-[6px] items-center flex">
                <img className="w-[20px] h-[20px]" src={phone} alt="phone" />
                <li>+2349067322844</li>
              </ul>
            </a>
          </li>
        </ul>
        {/* hero section*/}
        <div className="flex grow items-center">
          <div className="flex min-h-[521px] lg:flex-row flex-col-reverse gap-y-6 lg:gap-0">
            <div
              className="w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="2000"
              data-aos-duration="1000"
            >
              <div className="relative after:absolute after:w-[242px] after:h-[1px] after:bg-[#E5E5E5] after:bottom-[-3px] after:lg:left-[2px] mb-6 sm:mb-[30px] flex lg:justify-start justify-center">
                {tabs.map((tabs) => (
                  <button
                    key={tabs.id}
                    id={tabs.id}
                    onClick={handleTabClick}
                    className={`font-poppins text-[15px] not-italic font-semibold leading-normal duration-300 relative ${
                      tabs.id == 1 ? "ml-[23px] mr-[18px]" : ""
                    } ${tabs.id == 3 ? "ml-[15px]" : ""} ${
                      currentTab === `${tabs.id}`
                        ? "text-[#B00000] after:absolute after:w-[80%] after:bg-[#B00000] after:left-[8%] after:bottom-[-3px] after:z-[5] after:h-[1px]"
                        : "text-[rgba(214,212,212,0.88)]"
                    }`}
                  >
                    {tabs.heading}
                  </button>
                ))}
              </div>
              <div>
                {tabs.map((tabs) => (
                  <div
                    className="flex flex-col lg:items-start items-center"
                    key={tabs.id}
                  >
                    {currentTab === `${tabs.id}` && (
                      <>
                        <h1 className="text-[#2E2E2E] w-full font-poppins text-[35px] sm:text-[64px] not-italic font-bold sm:leading-[77.5px] mb-6 sm:mb-[34px] lg:text-start text-center">
                          {tabs.title}
                        </h1>
                        <p className="max-w-[448px] text-[#808080] font-inter text-base not-italic font-normal leading-[28px] tracking-[0.8px] mb-6 sm:mb-[60px] lg:text-start text-center">
                          {tabs.para}
                        </p>
                        <div className="flex gap-6 flex-wrap justify-center">
                          <button className="border border-solid border-black rounded-[8px] w-[160px] h-[48px] justify-center items-center flex font-poppins text-[14px] not-italic font-normal leading-[24px] text-white duration-300 bg-[#B00000] border-transparent shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] hover:shadow-none hover:bg-[rgba(176,0,0,0.8)]">
                            Create an Account
                          </button>
                          <button className="border border-solid border-black rounded-[8px] w-[160px] h-[48px] justify-center items-center flex text-black font-poppins text-[14px] not-italic font-normal leading-[24px] hover:text-white duration-300 bg-white hover:bg-black hover:border-transparent">
                            Choose your plan
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="2000"
              data-aos-duration="1000"
            >
              <img
                className="max-w-[552px] min-[1200px]:h-[504px] w-full"
                src={girl}
                alt="girl typing"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
