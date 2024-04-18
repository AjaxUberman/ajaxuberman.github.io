import React, { useState, useEffect } from "react";
import websites from "../../datas/websites.json";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const WebSites = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });
  const [slicer, setSlicer] = useState(0);

  /* Slicer */
  const clickHandler = (e) => {
    setSlicer(slicer + e);
  };
  useEffect(() => {
    if (isTabletOrMobile) {
      setSlicer(1);
    } else {
      setSlicer(3);
    }
  }, [isTabletOrMobile]);

  return (
    <div className="bg-websites-bg bg-cover h-screen flex flex-col justify-center  items-center font-fira-sans">
      <h1 className="md:text-4xl text-xl pb-4 font-bold">Websites</h1>
      <div className="flex items-center justify-center">
        <button
          className={`text-xl md:text-5xl bg-pastel-sari rounded-full hover:scale-105 translate-x-2 md:translate-x-0 transition duration-200 ease-in hover:text-pastel-yesil hover:bg-siyah-text ${
            (isTabletOrMobile ? slicer === 1 : slicer === 3) ? "opacity-0" : ""
          }`}
          onClick={() => clickHandler(-1)}
          disabled={isTabletOrMobile ? slicer === 1 : slicer === 3}
        >
          <FaCircleChevronLeft />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-4 md:px-20 ">
          {websites &&
            websites.websites.length > 0 &&
            websites.websites
              .slice(isTabletOrMobile ? slicer - 1 : slicer - 3, slicer)
              .map((website, index) => (
                <div
                  key={index}
                  className="flex flex-col pt-10 px-4 2xl:w-96 md:w-72 text-center gap-4 items-center  bg-pastel-mavi rounded-md h-[500px] relative shadow-md"
                >
                  <img
                    className="h-60 w-80 object-cover rounded-md"
                    src={website.img}
                    alt={website.title}
                  />
                  <div className="gap-4 2xl:gap-10 flex flex-col items-center ">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-white font-semibold text-lg md:text-2xl">
                        {website.title}
                      </h1>
                      <h2 className="text-blue-200 tracking-wide">
                        {website.description.length > 45
                          ? website.description.slice(0, 45).concat("...")
                          : website.description}
                      </h2>
                    </div>
                  </div>
                  <a
                    className="bg-rounded-full bg-siyah-text px-4 py-2 rounded-full text-white w-40 absolute bottom-4 hover:bg-active-item hover:scale-110 transition duration-100 ease-in hover:tracking-wider hover:text-siyah-text"
                    href={website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              ))}
        </div>
        <button
          className={`text-xl md:text-5xl bg-pastel-sari rounded-full hover:scale-105 -translate-x-2 md:translate-x-0 transition duration-200 ease-in hover:text-pastel-yesil hover:bg-siyah-text ${
            slicer > websites.websites.length - 1 ? "opacity-0" : ""
          }`}
          onClick={() => clickHandler(+1)}
          disabled={slicer > websites.websites.length - 1}
        >
          <FaCircleChevronRight />
        </button>
      </div>
    </div>
  );
};

export default WebSites;
