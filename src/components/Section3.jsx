import React from "react";
import crypto from "../assets/images/crypto.webp";
import smallquote from "../assets/images/smallquote.webp";
import bigquote from "../assets/images/bigquote.webp";
import jpnl from "../assets/images/jpnl.webp";
import leeve from "../assets/images/leeve.webp";
import jpnl2 from "../assets/images/jpnl2.webp";
import korane from "../assets/images/korane.webp";
import nadine from "../assets/images/nadine.webp";
import leeve2 from "../assets/images/leeve2.webp";
import jrango from "../assets/images/jrango.webp";
import crypto2 from "../assets/images/crypto2.webp";

function Section3() {
  return (
    <>
      <div
        id="section3"
        className="max-w-[1256px] w-full mx-auto pl-3 min-[1200px]:pl-[50px] pr-3 mb-12 lg:mb-[85px] overflow-hidden"
      >
        <div className="w-full flex flex-wrap">
          <div
            className="w-full min-[1100px]:w-1/2 flex justify-center min-[1100px]:justify-end"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="max-w-[445px] pt-[56px] flex flex-col items-end">
              <div>
                <h2 className="text-[#18191F] font-inter text-[35px] sm:text-[48px] not-italic font-extrabold sm:leading-[64px] mb-2 z-[1] relative">
                  Real Stories from Real Customers
                  <img
                    className="absolute w-[71px] sm:w-[143px] h-[60px] sm:h-[120px] z-[-1] top-[-43%] left-[0%] sm:left-[-21%]"
                    src={bigquote}
                    alt="quote"
                  />
                </h2>
                <p className="text-[#18191F] font-inter text-lg not-italic font-normal leading-[32px]">
                  Get inspired by these stories.
                </p>
              </div>
              <div className="mt-6">
                <div className="max-w-[350px] min-h-[468px] w-full rounded-[8px] bg-white shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] px-6 sm:px-[32px]">
                  <img
                    className="w-[120px] h-[120px] ml-[32px] mt-[7px]"
                    src={crypto}
                    alt="crypto"
                  />
                  <div className="flex gap-4 translate-y-[-23px]">
                    <img
                      className="w-[16px] h-[14px]"
                      src={smallquote}
                      alt="quote"
                    />
                    <div>
                      <p className="text-black font-inter text-base not-italic font-normal leading-[32px] mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim praesent elem
                      </p>
                      <p className="text-[#18191F] font-inter text-lg not-italic font-bold leading-[28px]">
                        Floyd Miles
                      </p>
                      <p className="text-[#969BAB] font-inter text-sm not-italic font-medium leading-[24px]">
                        Vice President, CLI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full min-[1100px]:w-1/2 sm:pl-[30px] pt-6 sm:pt-12 min-[1100px]:pt-[104px] flex flex-col items-center min-[1100px]:items-start"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="max-w-[445px] w-full min-h-[340px] rounded-[8px] bg-white shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] px-6 sm:px-[32px] pt-[39px] pb-[14px]">
              <img
                className="w-[79px] h-[50px] ml-[32px] mb-[15px]"
                src={jpnl}
                alt="jpnl"
              />
              <div className="flex gap-4">
                <img
                  className="w-[16px] h-[14px]"
                  src={smallquote}
                  alt="quote"
                />
                <div>
                  <p className="text-black font-inter text-base not-italic font-normal leading-[32px] mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                  <p className="text-[#18191F] font-inter text-lg not-italic font-bold leading-[28px]">
                    Jane Cooper
                  </p>
                  <p className="text-[#969BAB] font-inter text-sm not-italic font-medium leading-[24px]">
                    CEO, JPNL
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[32px] max-w-[350px] w-full min-h-[276px] rounded-[8px] bg-white shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] px-6 sm:px-[32px] pt-[41px] pb-6">
              <img
                className="w-[120px] h-[63px] ml-[23px]"
                src={leeve}
                alt="leeve"
              />
              <div className="flex gap-4">
                <img
                  className="w-[16px] h-[14px]"
                  src={smallquote}
                  alt="quote"
                />
                <div>
                  <p className="text-[#18191F] font-inter text-lg not-italic font-normal leading-[32px] mb-6">
                    LemonWares saved our time in Hosting my company page.
                  </p>
                  <p className="text-[#18191F] font-inter text-lg not-italic font-bold leading-[28px]">
                    Kristin Watson
                  </p>
                  <p className="text-[#969BAB] font-inter text-sm not-italic font-medium leading-[24px]">
                    Co-Founder, LeeveOn Branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap mt-6 lg:mt-[84px]">
          <div
            className="w-full lg:w-1/2 flex justify-center text-center lg:text-start lg:justify-start"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="max-w-[445px] w-full pt-[21px]">
              <h2 className="text-[#18191F] font-inter text-[35px] sm:text-[48px] not-italic font-extrabold sm:leading-[64px] mb-2">
                We serve over 100 Nigerian Websites
              </h2>
              <p className="text-[#18191F] font-inter text-lg not-italic font-normal leading-[32px]">
                Connect LemonWares with your favourite tools that you use daily
                and keep things on track.
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="max-w-[490px] w-full flex flex-wrap gap-x-6 sm:gap-x-[65px] justify-center">
              <div className="w-[120px] h-[120px] overflow-hidden">
                <a href="https://jerrypiping.com/" target="_blank">
                  <img src={jpnl2} alt="jpnl" />
                </a>
              </div>
              <div className="w-[120px] h-[120px] lg:translate-y-[10px] overflow-hidden">
                <a href="https://leeveon.com/korane-scents/" target="_blank">
                  <img src={korane} alt="korane" />
                </a>
              </div>
              <div className="w-[120px] h-[120px] lg:translate-y-[9px] overflow-hidden">
                <a href="https://www.shopnadineghaida.com/" target="_blank">
                  <img src={nadine} alt="nadine" />
                </a>
              </div>
              <div className="w-[120px] h-[120px] overflow-hidden">
                <a href="https://leeveon.com/" target="_blank">
                  <img src={leeve2} alt="leeve" />
                </a>
              </div>
              <div className="w-[120px] h-[120px] overflow-hidden">
                <a
                  href="https://jrangostores.com/?s=glasses&submit=Go"
                  target="_blank"
                >
                  <img src={jrango} alt="jrango" />
                </a>
              </div>
              <div className="w-[120px] h-[120px] overflow-hidden">
                <a href="https://crypto.com/" target="_blank">
                  <img src={crypto2} alt="crypto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
