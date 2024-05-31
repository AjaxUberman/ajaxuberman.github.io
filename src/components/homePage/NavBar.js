import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { setActiveStore } from "../../features/active/activeSlice";
import { useDispatch } from "react-redux";

const NavBar = ({ active }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });
  const dispatch = useDispatch();

  /* Menu Navigation */
  const clickHandler = (e) => {
    dispatch(setActiveStore(""));
    setTimeout(() => {
      dispatch(setActiveStore(e.target.value));
    }, 150);
  };

  /* Scroll Control */
  const [scrolled, setScrolled] = useState("false");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.div className="w-screen">
      <div className="absolute right-6 top-6 text-2xl">
        {isTabletOrMobile ? <IoCloseOutline /> : ""}
      </div>
      <div
        className={`flex gap-10 justify-center text-center items-center whitespace-nowrap  text-siyah-text font-fira-sans font-bold tracking-wider z-10 ${
          active ? "flex-col text-sm gap-2 pt-6" : ""
        } ${
          scrolled === true
            ? "fixed top-0 h-20 w-screen bg-pastel-bugday bg-opacity-75 pt-1 z-50"
            : "relative pt-20"
        }`}
      >
        <button
          className="bg-pastel-yesil py-4 px-2 rounded-full w-24 hover:scale-110 transition duration-100 ease-in shadow-md"
          value={"home"}
          onClick={clickHandler}
        >
          HOME
        </button>
        <button
          className="bg-pastel-kirmizi py-4 px-2 rounded-full w-24 hover:scale-110 transition duration-100 ease-in shadow-md"
          value={"games"}
          onClick={clickHandler}
        >
          APPS
        </button>
        <button
          className="bg-pastel-sari py-4 px-2 rounded-full w-24 hover:scale-110 transition duration-100 ease-in shadow-md"
          value={"websites"}
          onClick={clickHandler}
        >
          WEBSITES
        </button>
        <button
          className="bg-pastel-mor py-4 px-2 rounded-full w-24 hover:scale-110 transition duration-100 ease-in shadow-md"
          value={"about"}
          onClick={clickHandler}
        >
          ABOUT ME
        </button>
        <button
          className="bg-pastel-mavi py-4 px-2 rounded-full w-24 hover:scale-110 transition duration-100 ease-in shadow-md"
          value={"repos"}
          onClick={clickHandler}
        >
          REPOS
        </button>
      </div>
    </motion.div>
  );
};

export default NavBar;
