import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import websites from "../../datas/websites.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../games/games.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Games = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });
  const [slice, setSlice] = useState(3);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (isTabletOrMobile) {
      setSlice(1);
    } else {
      setSlice(3);
    }
  }, [isTabletOrMobile]);

  /* Desc Menu Handler */
  const descHandler = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  /* Slider */
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slice,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-games-bg bg-cover h-screen flex flex-col gap-4 2xl:gap-8 justify-center items-center font-fira-sans">
      <div>
        <h1 className="md:text-4xl text-xl md:text-bg-bugday font-bold">
          Apps That I Build
        </h1>
      </div>

      {isTabletOrMobile ? (
        <div className="md:h-96 md:w-[800px] w-52 h-96 2xl:h-2/3 2xl:w-3/4 bg-pastel-bugday items-center z-10 shadow-extra border-siyah-text border-4 flex relative">
          <div className="slider-container">
            {websites &&
              websites.games.slice(slice - 1, slice).map((i, index) => (
                <div
                  className="grid grid-cols-1 px-4 py-10 gap-10 w-full md:-translate-y-4 2xl:translate-y-0"
                  key={index}
                >
                  {/* Games */}
                  <div className="rounded-md bg-pastel-yesil flex flex-col items-center 2xl:py-20 px-4 2xl:gap-10 gap-4 shadow-md justify-center py-4 h-fit ">
                    <img
                      alt={i.title}
                      src={i.img}
                      className="w-40 h-40 2xl:w-60 2xl:h-60 object-cover"
                    />
                    <div className="text-center flex flex-col 2xl:gap-2 gap-0">
                      <h1 className="text-white 2xl:text-3xl md:text-xl font-semibold ">
                        {i.title}
                      </h1>
                      <button
                        className="text-sm text-white 2xl:text-lg tracking-widest opacity-70 drop-shadow-xl "
                        onClick={() => descHandler(index)}
                      >
                        {i.description.length < 22
                          ? i.description
                          : i.description.slice(0, 20).concat("...")}
                      </button>
                      {activeIndex === index && (
                        <div className="bg-white absolute z-50 h-60 w-40 text-sm px-4 py-2 top-20 text-center items-center flex border border-gray-400 rounded-md">
                          <span>{i.description}</span>
                          <button
                            className="absolute text-white bg-red-400 -top-3 -right-3 py-1 px-2 rounded-full border-t border-gray-400"
                            onClick={() => setActiveIndex(null)}
                          >
                            X
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 text-sm">
                      <button className="bg-siyah-text text-bg-bugday rounded-lg  px-2 hover:bg-white hover:text-siyah-text transition duration-100 ease-in">
                        Play
                      </button>
                      <button className="bg-transparent border-2 border-siyah-text rounded-lg  px-2 hover:bg-white hover:text-siyah-text transition duration-100 ease-in">
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="absolute right-0 translate-x-14 text-white text-2xl"
            onClick={() => setSlice(slice + 1)}
            disabled={slice >= websites.games.length}
          >
            <FaArrowCircleRight />
          </button>
          <button
            className="absolute left-0 -translate-x-14 text-white text-2xl"
            onClick={() => setSlice(slice - 1)}
            disabled={slice < 2}
          >
            <FaArrowCircleLeft />
          </button>
        </div>
      ) : (
        <div className="md:h-96 md:w-[800px] 2xl:h-2/3 2xl:w-3/4 bg-pastel-bugday z-10 shadow-extra border-siyah-text border-4 flex">
          <div className=" px-6 py-10 gap-10 w-full md:-translate-y-4 2xl:translate-y-0 ">
            {/* Games */}
            <div className="slider-container my-slider">
              <Slider {...settings}>
                {websites &&
                  websites.games.map((i, index) => (
                    <div
                      key={index}
                      className="rounded-md bg-pastel-yesil flex flex-col items-center justify-center md:h-[340px] 2xl:h-[580px] 2xl:gap-10 gap-4 shadow-md py-4"
                    >
                      <div className="2xl:translate-y-6">
                        <img
                          alt={i.title}
                          src={i.img}
                          className="w-40 h-40 2xl:w-60 2xl:h-60 object-cover object-top mx-auto center-img mb-0 2xl:mb-10 "
                        />
                        <div className="text-center flex flex-col 2xl:gap-2 gap-0">
                          <h1 className="text-white 2xl:text-3xl md:text-xl font-semibold ">
                            {i.title}
                          </h1>
                          <button
                            className="text-sm text-white 2xl:text-lg tracking-widest"
                            onClick={() => descHandler(index)}
                          >
                            {i.description.length < 22
                              ? i.description
                              : i.description.slice(0, 20).concat("...")}
                          </button>
                          {activeIndex === index && (
                            <div className="bg-white absolute z-50 h-60 w-80 text-sm px-4 py-2 top-5 2xl:top-60 2xl:translate-x-16 text-center items-center flex border border-gray-400 rounded-md">
                              <span>{i.description}</span>
                              <button
                                className="absolute text-white bg-red-400 -top-3 -right-3 py-1 px-2 rounded-full border-t border-gray-400"
                                onClick={() => setActiveIndex(null)}
                              >
                                X
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center mt-4">
                          <div className="flex gap-4">
                            <Link
                              to={i.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-siyah-text text-bg-bugday rounded-lg py-2 px-2 hover:bg-white hover:text-siyah-text transition duration-100 ease-in shadow-md"
                            >
                              Visit
                            </Link>
                            <Link
                              to={i.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-transparent border-2 border-siyah-text rounded-lg py-2 px-2 hover:bg-white hover:text-siyah-text transition duration-100 ease-in"
                            >
                              Source Code
                            </Link>
                          </div>
                          {i.server ? (
                            <div>
                              <Link
                                to={i.server}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border-2 border-siyah-text rounded-lg py-2 px-2 hover:bg-green-400 hover:text-white transition duration-100 ease-in"
                              >
                                Run Server
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;
