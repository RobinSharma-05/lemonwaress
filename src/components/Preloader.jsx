import React from "react";
import logo from "../assets/images/logo.webp";

function Preloader() {
  setTimeout(() => {
    document.getElementById("Preloader").classList.add("hidden");
    document.body.classList.remove("!overflow-hidden");
  }, 2000);
  return (
    <>
      <div
        id="Preloader"
        className="h-screen bg-white flex flex-col gap-4 justify-center items-center fixed top-0 left-0 w-full z-30 "
      >
        <img
          rel="preload"
          className="animate-bounce w-[100px]"
          src={logo}
          alt="logo"
        />
      </div>
    </>
  );
}

export default Preloader;
