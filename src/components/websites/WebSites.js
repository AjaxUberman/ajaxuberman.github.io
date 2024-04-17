import React, { useState } from "react";
import websites from "../../datas/websites.json";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const WebSites = () => {
  const [slicer, setSlicer] = useState(3);

  /* Slicer */
  const clickHandler = (e) => {
    setSlicer(slicer + e);
  };
  
  return (
    <div className="bg-websites-bg bg-cover h-screen flex justify-center items-center ">
      <div className="flex items-center justify-center">
        <button
          className={`text-5xl bg-pastel-sari rounded-full hover:-translate-x-2 transition duration-200 ease-in hover:text-pastel-yesil hover:bg-siyah-text ${
            slicer === 3 ? "opacity-0" : ""
          }`}
          onClick={() => clickHandler(-1)}
          disabled={slicer === 3}
        >
          <FaCircleChevronLeft />
        </button>
        <div className="grid grid-cols-3 gap-20 px-20 ">
          {websites &&
            websites.websites.length > 0 &&
            websites.websites
              .slice(slicer - 3, slicer)
              .map((website, index) => (
                <div
                  key={index}
                  className="flex flex-col pt-10 px-4 2xl:w-96 w-72 text-center gap-4 items-center  bg-pastel-mavi rounded-md h-[500px] relative shadow-md"
                >
                  <img
                    className="h-60 w-80 object-cover rounded-md"
                    src={website.img}
                    alt={website.title}
                  />
                  <div className="gap-4 2xl:gap-10 flex flex-col items-center ">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-white font-semibold text-2xl">
                        {website.title}
                      </h1>
                      <h2 className="text-blue-200 tracking-wide">
                        {website.description}
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
          className={`text-5xl bg-pastel-sari rounded-full hover:-translate-x-2 transition duration-200 ease-in hover:text-pastel-yesil hover:bg-siyah-text ${
            slicer > websites.websites.length ? "opacity-0" : ""
          }`}
          onClick={() => clickHandler(+1)}
          disabled={slicer > websites.websites.length}
        >
          <FaCircleChevronRight />
        </button>
      </div>
    </div>
  );
};

export default WebSites;
