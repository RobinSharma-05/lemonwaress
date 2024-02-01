import React from "react";
import cpanel from "../assets/images/cpanel.webp";
import imunity from "../assets/images/imunity.webp";
import litespeed from "../assets/images/litespeed.webp";
import softaculous from "../assets/images/softaculous.webp";
import wordpress from "../assets/images/wordpress.webp";
import cloudfare from "../assets/images/cloudfare.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ssl from "../assets/images/ssl.webp";
import hosting from "../assets/images/hosting.webp";
import uptime from "../assets/images/uptime.webp";
import support from "../assets/images/support.webp";

function Section1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const section1data = [
    {
      id: 1,
      image: uptime,
      heading: "99.9% Uptime",
      para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      id: 2,
      image: hosting,
      heading: "Blazing Fast Web Hosting",
      para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      id: 3,
      image: ssl,
      heading: "Free SSL Certificates",
      para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      id: 4,
      image: support,
      heading: "24x7 Friendly Support",
      para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
  ];

  return (
    <>
      <div
        id="section1"
        className="max-w-[1300px] w-full min-w-[1200px]:pl-5 pl-3 pr-3 mx-auto overflow-hidden mb-8 sm:mb-12"
      >
        <div className="flex w-full flex-wrap">
          <div
            className="w-full xl:w-1/2 flex flex-col items-center xl:items-start"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2 className="max-w-[594px] text-[#18191F] font-inter text-center xl:text-start text-[30px] sm:text-[48px] not-italic font-extrabold leading-[48px] sm:leading-[64px]">
              True Cloud Web Hosting
            </h2>
            <p className="max-w-[573px] text-[#18191F] font-inter text-lg not-italic font-normal leading-[32px] mt-6 text-center xl:text-start">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don't use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div
            className="w-full xl:w-1/2 xl:flex justify-end mt-[22px]"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="hidden xl:flex flex-wrap min-[1300px]:pl-[25px]">
              <div className="xl:mr-[82px] overflow-hidden">
                <a href="https://cpanel.net/" target="_blank">
                  <img className="w-[140px] h-[30]" src={cpanel} alt="cpanel" />
                </a>
              </div>
              <div className="xl:mr-[107px] overflow-hidden">
                <a href="https://www.imunify360.com/" target="_blank">
                  <img
                    className="w-[125px] h-[50px]"
                    src={imunity}
                    alt="imunity"
                  />
                </a>
              </div>
              <div className="overflow-hidden">
                <a href="https://www.litespeedtech.com/" target="_blank">
                  <img
                    className="w-[125px] h-[53px]"
                    src={litespeed}
                    alt="litespeed"
                  />
                </a>
              </div>
              <div className="xl:mr-[53px] overflow-hidden">
                <a href="https://softaculous.com/" target="_blank">
                  <img
                    className="w-[172px] h-[92px]"
                    src={softaculous}
                    alt="softaculous"
                  />
                </a>
              </div>
              <div className="overflow-hidden xl:mr-[77px] xl:mt-[13px]">
                <a
                  href="https://wordpress.com/?aff=15767&cid=1654213&cmp_id=11549382845&adg_id=111353876614&kwd=wordpress&device=c&gad_source=1&gclid=Cj0KCQiAh8OtBhCQARIsAIkWb6_3c_Q6k-hCoSNxGJMwZhZLtNmLYSluZKfYir8yTvao717o1JVuojoaAgxnEALw_wcB"
                  target="_blank"
                >
                  <img
                    className="w-[168px] h-[56px]"
                    src={wordpress}
                    alt="wordpress"
                  />
                </a>
              </div>
              <div className="overflow-hidden xl:mt-[13px]">
                <a
                  href="https://www.cloudflare.com/lp/ppc/overview-x/?utm_source=google&utm_medium=cpc&utm_campaign=ao-fy-acq-apac_en_in-umbrella-br-ge-prospecting-sch_g_brand_alpha_na_pure&utm_content=Alpha_Brand_Pure_Cloudflare&utm_term=cloudflare&campaignid=71700000116261124&adgroupid=58700008620157783&creativeid=682737031103&acs_info=ZmluYWxfdXJsOiAiaHR0cHM6Ly93d3cuY2xvdWRmbGFyZS5jb20vbHAvcHBjL292ZXJ2aWV3LXgvIgo&gclid=Cj0KCQiAh8OtBhCQARIsAIkWb69cT9u-V1DDM5_1IwYn1_pwUyQcqVc4_P9Aj8MALK1QkzeEKybXXmoaAh6cEALw_wcB&gclsrc=aw.ds"
                  target="_blank"
                >
                  <img
                    className="w-[143px] h-[47px]"
                    src={cloudfare}
                    alt="cloudfare"
                  />
                </a>
              </div>
            </div>
            <Slider className="xl:hidden" {...settings}>
              <div className="!flex justify-center items-center">
                <a className="" href="https://cpanel.net/" target="_blank">
                  <img
                    className="w-[141px] h-[30px]"
                    src={cpanel}
                    alt="cpanel"
                  />
                </a>
              </div>
              <div className="!flex justify-center items-center">
                <a
                  className=""
                  href="https://www.imunify360.com/"
                  target="_blank"
                >
                  <img
                    className="w-[125px] h-[50px]"
                    src={imunity}
                    alt="imunity"
                  />
                </a>
              </div>
              <div className="!flex justify-center items-center">
                <a
                  className=""
                  href="https://www.litespeedtech.com/"
                  target="_blank"
                >
                  <img
                    className="w-[125px] h-[54px]"
                    src={litespeed}
                    alt="litespeed"
                  />
                </a>
              </div>
              <div className="!flex justify-center items-center">
                <a className="" href="https://softaculous.com/" target="_blank">
                  <img
                    className="w-[172px] h-[92px]"
                    src={softaculous}
                    alt="softaculous"
                  />
                </a>
              </div>
              <div className="!flex justify-center items-center">
                <a
                  className=""
                  href="https://wordpress.com/?aff=15767&cid=1654213&cmp_id=11549382845&adg_id=111353876614&kwd=wordpress&device=c&gad_source=1&gclid=Cj0KCQiAh8OtBhCQARIsAIkWb6_3c_Q6k-hCoSNxGJMwZhZLtNmLYSluZKfYir8yTvao717o1JVuojoaAgxnEALw_wcB"
                  target="_blank"
                >
                  <img
                    className="w-[168px] h-[56px]"
                    src={wordpress}
                    alt="wordpress"
                  />
                </a>
              </div>
              <div className="!flex justify-center items-center">
                <a
                  className=""
                  href="https://www.cloudflare.com/lp/ppc/overview-x/?utm_source=google&utm_medium=cpc&utm_campaign=ao-fy-acq-apac_en_in-umbrella-br-ge-prospecting-sch_g_brand_alpha_na_pure&utm_content=Alpha_Brand_Pure_Cloudflare&utm_term=cloudflare&campaignid=71700000116261124&adgroupid=58700008620157783&creativeid=682737031103&acs_info=ZmluYWxfdXJsOiAiaHR0cHM6Ly93d3cuY2xvdWRmbGFyZS5jb20vbHAvcHBjL292ZXJ2aWV3LXgvIgo&gclid=Cj0KCQiAh8OtBhCQARIsAIkWb69cT9u-V1DDM5_1IwYn1_pwUyQcqVc4_P9Aj8MALK1QkzeEKybXXmoaAh6cEALw_wcB&gclsrc=aw.ds"
                  target="_blank"
                >
                  <img
                    className="w-[143px] h-[47px]"
                    src={cloudfare}
                    alt="cloudfare"
                  />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        <div
          className="flex justify-around mt-12 lg:mt-[118px] flex-wrap gap-6"
          data-aos="zoom-out"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          {section1data.map((data, index) => (
            <div
              key={index}
              className={`${data.id == 2 ? "max-w-[259px]" : "max-w-[252px]"} ${
                data.id == 1 ? "lg:pt-[5px]" : ""
              } flex flex-col items-center`}
            >
              <img
                className={`${
                  data.id == 1 ? "mb-3" : "mb-[17px]"
                } w-[100px] h-[100px] cursor-pointer`}
                src={data.image}
                alt="image"
              />
              <h2 className="text-black text-center font-poppins text-xl not-italic font-bold leading-normal mb-1">
                {data.heading}
              </h2>
              <p className="text-black text-center font-poppins text-[12px] not-italic font-light leading-normal">
                {data.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section1;
