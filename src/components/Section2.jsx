import React, { useState } from "react";

function Section2() {
  const [year, setYear] = useState(false);
  const [currentTab2, setCurrentTab2] = useState("1");
  const monthTab = [
    {
      id: 1,
      heading: "Basic",
    },
    {
      id: 2,
      heading: "Premium",
    },
  ];
  const monthpack = [
    {
      heading: "Starter",
      basicMonthlyPrice: "$2.80",
      basicMonthlySsd: "2GB SSD",
      basicMonthlyBandwidth: "10GB Bandwidth",
      basicMonthlyEmail: "15 Email Accounts",
      basicMonthlySubDomain: "4 Subdomains",
      basicMonthlyParkedDomain: "1 Parked Domain",
      basicMonthlyWebsites: "2 Websites",
      premiumMonthlyPrice: "$4.80",
      premiumMonthlySsd: "4GB SSD",
      premiumMonthlyBandwidth: "20GB Bandwidth",
      premiumMonthlyEmail: "30 Email Accounts",
      premiumMonthlySubDomain: "8 Subdomains",
      premiumMonthlyParkedDomain: "2 Parked Domain",
      premiumMonthlyWebsites: "4 Websites",
    },
    {
      heading: "Standard",
      basicMonthlyPrice: "$4.20",
      basicMonthlySsd: "2GB SSD",
      basicMonthlyBandwidth: "10GB Bandwidth",
      basicMonthlyEmail: "15 Email Accounts",
      basicMonthlySubDomain: "4 Subdomains",
      basicMonthlyParkedDomain: "1 Parked Domain",
      basicMonthlyWebsites: "2 Websites",
      premiumMonthlyPrice: "$8.80",
      premiumMonthlySsd: "4GB SSD",
      premiumMonthlyBandwidth: "20GB Bandwidth",
      premiumMonthlyEmail: "30 Email Accounts",
      premiumMonthlySubDomain: "8 Subdomains",
      premiumMonthlyParkedDomain: "2 Parked Domain",
      premiumMonthlyWebsites: "4 Websites",
    },
    {
      heading: "Suprem",
      basicMonthlyPrice: "$7.00",
      basicMonthlySsd: "2GB SSD",
      basicMonthlyBandwidth: "10GB Bandwidth",
      basicMonthlyEmail: "15 Email Accounts",
      basicMonthlySubDomain: "4 Subdomains",
      basicMonthlyParkedDomain: "1 Parked Domain",
      basicMonthlyWebsites: "2 Websites",
      premiumMonthlyPrice: "$14.00",
      premiumMonthlySsd: "4GB SSD",
      premiumMonthlyBandwidth: "20GB Bandwidth",
      premiumMonthlyEmail: "30 Email Accounts",
      premiumMonthlySubDomain: "8 Subdomains",
      premiumMonthlyParkedDomain: "2 Parked Domain",
      premiumMonthlyWebsites: "4 Websites",
    },
  ];
  const yearpack = [
    {
      heading: "Starter",
      basicYearlyPrice: "$6.80",
      basicYearlySsd: "6GB SSD",
      basicYearlyBandwidth: "30GB Bandwidth",
      basicYearlyEmail: "45 Email Accounts",
      basicYearlySubDomain: "12 Subdomains",
      basicYearlyParkedDomain: "3 Parked Domain",
      basicYearlyWebsites: "6 Websites",
      premiumYearlyPrice: "$12",
      premiumYearlySsd: "8GB SSD",
      premiumYearlyBandwidth: "40GB Bandwidth",
      premiumYearlyEmail: "60 Email Accounts",
      premiumYearlySubDomain: "16 Subdomains",
      premiumYearlyParkedDomain: "4 Parked Domain",
      premiumYearlyWebsites: "8 Websites",
    },
    {
      heading: "Standard",
      basicYearlyPrice: "$12.20",
      basicYearlySsd: "6GB SSD",
      basicYearlyBandwidth: "30GB Bandwidth",
      basicYearlyEmail: "45 Email Accounts",
      basicYearlySubDomain: "12 Subdomains",
      basicYearlyParkedDomain: "3 Parked Domain",
      basicYearlyWebsites: "6 Websites",
      premiumYearlyPrice: "$24",
      premiumYearlySsd: "8GB SSD",
      premiumYearlyBandwidth: "40GB Bandwidth",
      premiumYearlyEmail: "60 Email Accounts",
      premiumYearlySubDomain: "16 Subdomains",
      premiumYearlyParkedDomain: "4 Parked Domain",
      premiumYearlyWebsites: "8 Websites",
    },
    {
      heading: "Suprem",
      basicYearlyPrice: "$21.00",
      basicYearlySsd: "6GB SSD",
      basicYearlyBandwidth: "30GB Bandwidth",
      basicYearlyEmail: "45 Email Accounts",
      basicYearlySubDomain: "12 Subdomains",
      basicYearlyParkedDomain: "3 Parked Domain",
      basicYearlyWebsites: "6 Websites",
      premiumYearlyPrice: "$28",
      premiumYearlySsd: "8GB SSD",
      premiumYearlyBandwidth: "40GB Bandwidth",
      premiumYearlyEmail: "60 Email Accounts",
      premiumYearlySubDomain: "16 Subdomains",
      premiumYearlyParkedDomain: "4 Parked Domain",
      premiumYearlyWebsites: "8 Websites",
    },
  ];

  function handleTabClick2(e) {
    setCurrentTab2(e.target.id);
  }
  return (
    <>
      <div
        id="section2"
        className="min-[1200px]:pt-[85px] mb-12 min-[1200px]:mb-[105px] overflow-hidden"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <div className="max-w-[1120px] mx-auto px-3 flex flex-col items-center overflow-hidden">
          <h2 className="max-w-[650px] text-black text-center font-poppins text-[35px] sm:text-[50px] not-italic font-semibold sm:leading-[60px] mb-6 sm:mb-[38px]">
            Ready to get started with Lemon Wares?
          </h2>
          <p className="text-black text-center font-poppins text-[20px] sm:text-[25px] not-italic font-normal leading-[25px] mb-6 sm:mb-[57px]">
            Choose the package that suits you
          </p>
          <div className="flex justify-center gap-2 gap-y-5 sm:gap-0 sm:justify-start items-center flex-wrap sm:pl-[85px] mb-6 sm:mb-[70px]">
            <span className="text-black text-center font-poppins text-xl sm:text-[25px] not-italic font-normal leading-[25px]">
              Monthly
            </span>
            <span
              onClick={() => setYear(!year)}
              className={`flex cursor-pointer items-center px-[9px] sm:ml-[31px] sm:mr-[26px] w-[60px] sm:w-[93px] h-[25px] sm:h-[50px] rounded-[73px] bg-[#B00000] relative`}
            >
              <span
                className={`block w-[15px] sm:w-[30px] h-[15px] sm:h-[30px] duration-500 rounded-[50%] absolute ${
                  year == false ? "bg-white left-[9%]" : "bg-black left-[65%] sm:left-[58%]"
                }`}
              ></span>
            </span>
            <span className="text-black text-center font-poppins text-xl sm:text-[25px] not-italic font-normal leading-[25px]">
              Yearly
            </span>
            <span className="w-[87px] h-[24px] rounded-[8px] bg-[#FFE87A] text-black text-center font-poppins text-[10px] not-italic font-medium leading-[9px] flex justify-center items-center sm:ml-[17px]">
              20% discount
            </span>
          </div>
          {/* monthly */}
          <div
            className={`w-full flex flex-col items-center ${
              year == false ? "" : "hidden"
            }`}
          >
            <div className="max-w-[856px] flex w-full relative after:absolute after:w-full after:h-[4px] after:bg-[#C4C4C4] after:bottom-[-7px]">
              {monthTab.map((tab) => (
                <button
                  id={tab.id}
                  onClick={handleTabClick2}
                  className={`text-black text-center font-poppins text-[25px] sm:text-[30px] not-italic font-semibold leading-[40px] w-1/2 flex justify-center relative duration-300 after:duration-300 ${
                    currentTab2 === `${tab.id}`
                      ? "after:absolute after:w-full after:h-[4px] after:bg-[#B00000] after:bottom-[-7px] after:z-[1]"
                      : ""
                  }`}
                  key={tab.id}
                >
                  {tab.heading}
                </button>
              ))}
            </div>
            <div className="mt-[60px] sm:mt-[95px] w-full">
              {monthTab.map((tab) => (
                <div
                  key={tab.id}
                  className="flex justify-center lg:justify-between flex-wrap gap-6"
                >
                  {currentTab2 === `${tab.id}` && (
                    <>
                      {monthpack.map((pack, index) => (
                        <div
                          className="w-[299px] rounded-[15px] border-[1.5px] border-solid border-[#C4C4C4] bg-white shadow-[0px_0px_4px_0px rgba(0,0,0,0.25)_inset] pt-[20px] sm:pt-[34px] pr-[20px] sm:pr-[29px] pb-[20px] sm:pb-[48px] pl-[20px] sm:pl-[35px]"
                          key={index}
                        >
                          <h2 className="text-black font-poppins text-[28px] not-italic font-semibold leading-[25px] mb-[11px]">
                            {pack.heading}
                          </h2>
                          <p className="text-black font-poppins text-[12px] not-italic font-normal leading-[18px] mb-7">
                            with all your customers via all conversation
                            channels in one central dashboard.
                          </p>
                          <p className="pl-[2px] text-black font-poppins text-[42px] not-italic font-semibold leading-[32px] mb-[11px]">
                            {tab.id === 1
                              ? `${pack.basicMonthlyPrice}`
                              : `${pack.premiumMonthlyPrice}`}
                          </p>
                          <p className="text-black font-poppins text-sm not-italic font-light leading-[14px] pl-[6px] mb-6 sm:mb-[35px]">
                            Per month
                          </p>
                          <button className="w-full h-[50px] rounded-[12px] border-[2px] border-solid border-black bg-white text-black font-poppins text-center text-sm not-italic font-semibold leading-[32px] duration-300 hover:bg-[#B00000] hover:shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] hover:border-transparent hover:text-white mb-6 sm:mb-[35px]">
                            Choose this Plan
                          </button>
                          <ul>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-bold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicMonthlySsd}`
                                : `${pack.premiumMonthlySsd}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicMonthlyBandwidth}`
                                : `${pack.premiumMonthlyBandwidth}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicMonthlyEmail}`
                                : `${pack.premiumMonthlyEmail}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-bold leading-[24px] mb-[15px]">
                              Unlimited Database
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicMonthlySubDomain}`
                                : `${pack.premiumMonthlySubDomain}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicMonthlyParkedDomain}`
                                : `${pack.premiumMonthlyParkedDomain}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[18px]">
                              {tab.id === 1
                                ? `${pack.basicMonthlyWebsites}`
                                : `${pack.premiumMonthlyWebsites}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              Free SSL
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px]">
                              Softaculous
                            </li>
                          </ul>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* yearly */}
          <div
            className={`w-full flex flex-col items-center ${
              year == false ? "hidden" : ""
            }`}
          >
            <div className="max-w-[856px] flex w-full relative after:absolute after:w-full after:h-[4px] after:bg-[#C4C4C4] after:bottom-[-7px]">
              {monthTab.map((tab) => (
                <button
                  id={tab.id}
                  onClick={handleTabClick2}
                  className={`text-black text-center font-poppins text-[25px] sm:text-[30px] not-italic font-semibold leading-[40px] w-1/2 flex justify-center relative duration-300 after:duration-300 ${
                    currentTab2 === `${tab.id}`
                      ? "after:absolute after:w-full after:h-[4px] after:bg-[#B00000] after:bottom-[-7px] after:z-[1]"
                      : ""
                  }`}
                  key={tab.id}
                >
                  {tab.heading}
                </button>
              ))}
            </div>
            <div className="mt-[60px] sm:mt-[95px] w-full">
              {monthTab.map((tab) => (
                <div
                  key={tab.id}
                  className="flex justify-center lg:justify-between flex-wrap gap-6"
                >
                  {currentTab2 === `${tab.id}` && (
                    <>
                      {yearpack.map((pack, index) => (
                        <div
                          className="w-[299px] rounded-[15px] border-[1.5px] border-solid border-[#C4C4C4] bg-white shadow-[0px_0px_4px_0px rgba(0,0,0,0.25)_inset] pt-[20px] sm:pt-[34px] pr-[20px] sm:pr-[29px] pb-[20px] sm:pb-[48px] pl-[20px] sm:pl-[35px]"
                          key={index}
                        >
                          <h2 className="text-black font-poppins text-[28px] not-italic font-semibold leading-[25px] mb-[11px]">
                            {pack.heading}
                          </h2>
                          <p className="text-black font-poppins text-[12px] not-italic font-normal leading-[18px] mb-7">
                            with all your customers via all conversation
                            channels in one central dashboard.
                          </p>
                          <p className="pl-[2px] text-black font-poppins text-[42px] not-italic font-semibold leading-[32px] mb-[11px]">
                            {tab.id === 1
                              ? `${pack.basicYearlyPrice}`
                              : `${pack.premiumYearlyPrice}`}
                          </p>
                          <p className="text-black font-poppins text-sm not-italic font-light leading-[14px] pl-[6px] mb-6 sm:mb-[35px]">
                            Per year
                          </p>
                          <button className="w-full h-[50px] rounded-[12px] border-[2px] border-solid border-black bg-white text-black font-poppins text-center text-sm not-italic font-semibold leading-[32px] duration-300 hover:bg-[#B00000] hover:shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] hover:border-transparent hover:text-white mb-6 sm:mb-[35px]">
                            Choose this Plan
                          </button>
                          <ul>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-bold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicYearlySsd}`
                                : `${pack.premiumYearlySsd}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicYearlyBandwidth}`
                                : `${pack.premiumYearlyBandwidth}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicYearlyEmail}`
                                : `${pack.premiumYearlyEmail}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-bold leading-[24px] mb-[15px]">
                              Unlimited Database
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicYearlySubDomain}`
                                : `${pack.premiumYearlySubDomain}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              {tab.id === 1
                                ? `${pack.basicYearlyParkedDomain}`
                                : `${pack.premiumYearlyParkedDomain}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[18px]">
                              {tab.id === 1
                                ? `${pack.basicYearlyWebsites}`
                                : `${pack.premiumYearlyWebsites}`}
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px] mb-[15px]">
                              Free SSL
                            </li>
                            <li className="bg-checkmark bg-no-repeat bg-left pl-12 text-[#808080] font-inter text-base not-italic font-semibold leading-[24px]">
                              Softaculous
                            </li>
                          </ul>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
