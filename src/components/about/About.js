import React from "react";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";

const about = () => {
  return (
    <div className="bg-pastel-mavi md:h-screen w-screen flex relative font-fira-sans">
      <div className="flex flex-col md:flex-row items-center justify-around w-screen  md:px-60">
        <div className="w-20 h-20 md:w-60 md:h-60  2xl:w-80 2xl:h-80">
          <img
            src="https://media4.giphy.com/media/OfdA9ssTZzVgBWJuB9/giphy.gif?cid=6c09b952ysf06dwlg8hy7li9cyzleiy9c8dsj4v2gkosi4or&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
            alt="travel"
          />
        </div>
        <div className="w-96 2xl:w-[600px] flex flex-col gap-4 md:gap-20 items-center md:pt-20 md:px-0 px-20 z-20">
          <h1 className="text-pastel-bugday text-sm  2xl:text-xl font-semibold">
            Hello! I'm{"  "}
            <span className="text-green-700 font-bold">
              &lt;Baris Kayikci /&gt;{" "}
            </span>
            , a Front-End Developer with a passion for crafting digital
            experiences. My journey into the world of coding began after
            graduating from Mimar Sinan Fine Arts University with a degree in
            Cinema-TV. While I initially embarked on a career in the industry,
            my fascination with technology led me to transition into the realm
            of web development.
            <br />
            <br />
            With two years of professional experience under my belt, I found
            myself drawn to the artistry and precision of front-end development.
            Now, I immerse myself in the world of code, where I blend creativity
            with technical expertise to bring ideas to life on the digital
            canvas.
            <br /> <br />
            Outside of coding, you can often find me on traveling,cycling or
            watching movies.
          </h1>
          <div className="flex items-center gap-4 pb-10 ">
            <a
              className="bg-green-400 text-white py-2 px-4 rounded-full text-lg md:text-2xl hover:scale-110 transition duration-100 ease-in hover:bg-white hover:text-green-400 "
              href="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
            <Link
              to={"https://www.linkedin.com/in/bariskayikcipdw/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full w-10 h-10 bg-white text-green-400 flex items-center justify-center hover:bg-green-400 hover:scale-110 hover:text-white">
                <CiLinkedin />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <img
        alt=""
        src="https://media4.giphy.com/media/g7HDkRvkiAUvWWsNkv/giphy.gif?cid=6c09b952u3z5hcbcz4vxe0eiilyo14ljmtkrpuywx0xnm6qk&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        className="absolute bottom-0 right-20 2xl:w-60 2xl:h-60 w-10 h-10 md:w-40 md:h-40"
      />
      <img
        alt=""
        src="https://pngimg.com/d/starwars_PNG6.png"
        className="w-20 h-20 md:w-60 md:h-60 absolute right-10 z-0 top-40"
      />
    </div>
  );
};

export default about;
