import React from "react";
import footerlogo from "../assets/images/logo_footer.svg";

function Footer() {
  return (
    <>
      <div
        id="footer"
        className="bg-[#B00000] min-h-[536px] pt-12 sm:pt-[64px] pb-6 min-[992px]:pb-0"
      >
        <div className="max-w-[1256px] w-full mx-auto pl-3 pr-3 min-[1200px]:pr-[23px] flex flex-wrap gap-y-6">
          <div className="w-full min-[992px]:w-[34%]">
            <div className="max-w-[296px]">
              <a href="#header">
                <img
                  className="w-[121px] h-[80px] mb-4"
                  src={footerlogo}
                  alt="logo"
                />
              </a>
              <p className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elem
              </p>
            </div>
          </div>
          <div className="w-full min-[992px]:w-[66%] flex flex-wrap gap-y-6">
            <div className="w-[50%] sm:w-[25%] md:mt-4 flex justify-start">
              <ul className="flex flex-col gap-6">
                <li className="text-white font-inter text-base not-italic font-bold leading-[24px]">
                  Service
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Domain
                  </a>
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Shared Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Cloud Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Private Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[50%] sm:w-[25%] md:mt-4 flex justify-start sm:justify-end">
              <ul className="flex flex-col gap-6">
                <li className="text-white font-inter text-base not-italic font-bold leading-[24px]">
                  Hosting
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Cheap Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Hosting Wordpress
                  </a>
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Email Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="#section1"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Hosting Unlimited
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[50%] sm:w-[25%] md:mt-4 flex justify-start sm:justify-end">
              <ul className="flex flex-col gap-6">
                <li className="text-white font-inter text-base not-italic font-bold leading-[24px]">
                  Company
                </li>
                <li>
                  <a
                    href="#section2"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[50%] sm:w-[25%] md:mt-4 flex justify-start sm:justify-end">
              <ul className="flex flex-col gap-6">
                <li className="text-white font-inter text-base not-italic font-bold leading-[24px]">
                  Help
                </li>
                <li>
                  <a
                    href="#footer"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#footer"
                    className="text-[#E6E6E6] font-inter text-base not-italic font-normal leading-[32px] relative after:absolute after:w-0 after:h-[1px] after:bg-[#E6E6E6] after:left-[50%] hover:after:w-full hover:after:left-[0%] after:bottom-[-2px] after:duration-300"
                  >
                    Help support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="w-full max-w-[1256px] mx-auto pl-3 pr-3 min-[1200px]:pr-[23px] flex flex-wrap flex-col min-[410px]:flex-row items-center mt-8 sm:mt-12 min-[992px]">
          <span className="text-white font-inter text-base not-italic font-normal leading-[32px]">
            Built by Jeremiah with
          </span>{" "}
          <svg
            className="mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z"
              fill="white"
            />
          </svg>{" "}
          <span className="text-white font-inter text-base not-italic font-normal leading-[32px]">
            in Lagos. Copyright 2021
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
