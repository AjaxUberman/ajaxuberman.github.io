import React from "react";

const Games = () => {
  return (
    <div className="bg-games-bg bg-cover h-screen flex flex-col gap-4 2xl:gap-8 justify-center items-center">
      <div>
        <h1 className="text-4xl text-bg-bugday font-bold">
          Games That I Build
        </h1>
      </div>
      <div className="md:h-96 md:w-[800px] 2xl:h-2/3 2xl:w-3/4 bg-pastel-bugday z-10 shadow-extra border-siyah-text border-4 flex">
        <div className="grid grid-cols-3 px-6 py-10 gap-10 w-full md:-translate-y-4 2xl:translate-y-0">
          {/* Games */}
          <div className="rounded-md bg-pastel-yesil flex flex-col items-center 2xl:py-20  2xl:gap-10 gap-4 shadow-md justify-center py-4 h-fit ">
            <img
              alt=""
              src="https://www.atarisalon.com/games/images/Battle_City.png"
              className="w-40 h-40 2xl:w-60 2xl:h-60"
            />
            <div className="text-center flex flex-col 2xl:gap-2 gap-0">
              <h1 className="text-white 2xl:text-3xl md:text-xl font-semibold ">
                Tank Game
              </h1>
              <p className="text-sm text-white 2xl:text-lg tracking-widest">
                Totally made with JS
              </p>
            </div>
            <div className="flex gap-6">
              <button className="bg-siyah-text text-bg-bugday rounded-lg py-2 px-2 hover:bg-white hover:text-siyah-text transition duration-100 ease-in">
                Play
              </button>
              <button className="bg-transparent border-2 border-siyah-text rounded-lg py-2 px-2 hover:bg-siyah-text hover:text-white transition duration-100 ease-in">
                Source Code
              </button>
            </div>
          </div>
          <div className="rounded-md bg-pastel-yesil flex flex-col items-center 2xl:py-20  2xl:gap-10 gap-4 shadow-md justify-center py-4 h-fit ">
            <img
              alt=""
              src="https://www.atarisalon.com/games/images/Battle_City.png"
              className="w-40 h-40 2xl:w-60 2xl:h-60"
            />
            <div className="text-center flex flex-col 2xl:gap-2 gap-0">
              <h1 className="text-white 2xl:text-3xl md:text-xl font-semibold ">
                Tank Game
              </h1>
              <p className="text-sm text-white 2xl:text-lg tracking-widest">
                Totally made with JS
              </p>
            </div>
            <div className="flex gap-6">
              <button className="bg-siyah-text text-bg-bugday rounded-lg py-2 px-2 hover:bg-white hover:text-siyah-text transition duration-100 ease-in">
                Play
              </button>
              <button className="bg-transparent border-2 border-siyah-text rounded-lg py-2 px-2 hover:bg-siyah-text hover:text-white transition duration-100 ease-in">
                Source Code
              </button>
            </div>
          </div>
          <div className="rounded-md bg-pastel-yesil flex flex-col items-center 2xl:py-20  2xl:gap-10 gap-4 shadow-md justify-center py-4 h-fit ">
            <img
              alt=""
              src="https://www.atarisalon.com/games/images/Battle_City.png"
              className="w-40 h-40 2xl:w-60 2xl:h-60"
            />
            <div className="text-center flex flex-col 2xl:gap-2 gap-0">
              <h1 className="text-white 2xl:text-3xl md:text-xl font-semibold ">
                Tank Game
              </h1>
              <p className="text-sm text-white 2xl:text-lg tracking-widest">
                Totally made with JS
              </p>
            </div>
            <div className="flex gap-6">
              <button className="bg-siyah-text text-bg-bugday rounded-lg py-2 px-2 hover:bg-white hover:text-siyah-text transition duration-100 ease-in">
                Play
              </button>
              <button className="bg-transparent border-2 border-siyah-text rounded-lg py-2 px-2 hover:bg-siyah-text hover:text-white transition duration-100 ease-in">
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
