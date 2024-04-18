import React from "react";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });

  return (
    <div
      className={`2xl:px-64 md:px-52 py-10 px-4 md:pt-20 2xl:pt-48 flex justify-around font-fira-sans ${
        isTabletOrMobile ? "grid grid-cols-1 gap-6 px-5" : ""
      }`}
    >
      {/* Texts */}
      <div className="text-siyah-text flex flex-col gap-2 md:gap-4 2xl:gap-10  md:w-96 ">
        <div className="flex flex-col md:gap-6 gap-4">
          <div className="gap-0 md:gap-2 flex flex-col">
            <h2 className="font-bold text-lg md:text-xl 2xl:text-3xl ">
              Hello, I'm{" "}
            </h2>
            <h1 className="font-extrabold text-2xl md:text-4xl 2xl:text-5xl tracking-widest">
              Baris Kayikci
            </h1>
          </div>
          <p className="font-semibold text-l tracking-widest">
            Creating apps and solutions isn't just a job for me—it's my passion.
          </p>
        </div>
        {/* Skills */}
        <div className="flex flex-col items-center pt-6 gap-4 2xl:gap-8">
          <div className="flex flex-col items-center gap-4">
            <h1 className="rounded-md bg-pastel-bugday font-bold w-24 py-2 px-2 text-center ring-1 ring-siyah-text shadow-subtle">
              Skills
            </h1>
            <p className="font-medium">Skills that I'm really good at:</p>
          </div>
          <div className="grid grid-cols-4 gap-4 text-pastel-mavi">
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                className="w-8 h-8 rounded-full shadow-md"
              />
              <h1>JavaScript</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                className="w-8 h-8 rounded-full shadow-md"
              />
              <h1>TypeScript</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                className="w-8 h-8 rounded-full "
              />
              <h1>React</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                className="w-8 h-8 rounded-full "
              />
              <h1>Git</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png"
                className="w-8 h-8 rounded-full"
              />
              <h1>Npm</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://image.pngaaa.com/772/3801772-small.png"
                className="w-8 h-8 rounded-full "
              />
              <h1>Bootstrap</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
                className="w-8 h-8 rounded-full "
              />
              <h1>HTML</h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt=""
                src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
                className="w-8 h-8 rounded-full "
              />
              <h1>CSS</h1>
            </div>
          </div>
        </div>
      </div>
      {/* IMG */}
      <img
        alt=""
        src="https://images.gamebanana.com/img/ico/sprays/5a19d20765d97.gif"
        className="object-cover w-96"
      />
    </div>
  );
};

export default HomePage;
