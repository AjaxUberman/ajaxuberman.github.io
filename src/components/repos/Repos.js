import React, { useEffect, useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { Link } from "react-router-dom";

const Repos = () => {
  const [datas, setDatas] = useState([]);
  const [basicDatas, setBasicDatas] = useState([]);

  /* API REPOS */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/ajaxuberman/repos"
        );
        const fetched = await response.json();
        setDatas(fetched);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };
    if (!datas.length) {
      fetchData();
    }
  }, []);

  /* Basıc Datas */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/ajaxuberman"
        );
        const fetched = await response.json();
        setBasicDatas(fetched);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };
    if (!datas.length) {
      fetchData();
    }
  }, []);

  return (
    <div className="bg-active-item w-screen h-full md:h-full font-fira-sans flex flex-col pt-20 pb-10 items-center">
      <div className="flex flex-col md:flex-row md:py-0 py-4 items-center gap-4 md:gap-10 rounded-full  bg-slate-500 px-4  w-60 md:w-fit h-fit shadow-xl ">
        <div className="flex gap-10 items-center">
          <img
            src={basicDatas.avatar_url}
            alt=""
            className="2xl:w-40 2xl:h-40 md:w-20 md:h-20 w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="font-bold text-white md:text-2xl text-lg">
              {basicDatas.login}
            </h1>
            <h2 className="text-active-item text-sm tracking-widest">
              {basicDatas.location}
            </h2>
          </div>
        </div>
        <div>
          <a
            href={basicDatas.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-active-item hover:bg-siyah-text hover:text-active-item"
          >
            {basicDatas.public_repos} Public Repos
          </a>
        </div>
      </div>
      {datas.length > 1 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-24 gap-10">
          {datas.length > 1
            ? datas.map((i, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-slate-500 w-60 md:w-80 h-20 flex justify-between items-center px-6 shadow-md"
                >
                  <div className="text-white font-bold">
                    {i.name && i.name.length > 15
                      ? i.name.slice(0, 15).concat("...")
                      : i.name}
                  </div>
                  <div className="text-white opacity-50 hidden md:inline tracking-wider font-light">
                    {i.language}
                  </div>
                  <div className="relative ">
                    <Link
                      to={i.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-active-item hover:bg-siyah-text hover:text-active-item"
                    >
                      <div className="absolute right-2 top-1">
                        <HiCursorClick />
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            : ""}
        </div>
      ) : (
        <div className="text-red flex text-4xl justify-center items-center pt-10">
          GitHub API'den veri alınamıyor.Farklı IP deneyiniz.
        </div>
      )}
    </div>
  );
};

export default Repos;
