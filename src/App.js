import HomePage from "./components/homePage/HomePage";
import NavBar from "./components/homePage/NavBar";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./components/homePage/MobileMenu";
import Games from "./components/games/Games";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import About from "./components/about/About";
import Repos from "./components/repos/Repos";
import WebSites from "./components/websites/WebSites";
import "./index.css";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 924px)" });
  const activeMenu = useSelector((state) => state.active.active);

  /* Auto Scroll */
  const refs = {
    games: useRef(null),
    websites: useRef(null),
    about: useRef(null),
    repos: useRef(null),
    home: useRef(null),
  };

  const scrollTo = (target) => {
    refs[target].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (activeMenu === "games") {
      scrollTo("games");
    } else if (activeMenu === "websites") {
      scrollTo("websites");
    } else if (activeMenu === "about") {
      scrollTo("about");
    } else if (activeMenu === "repos") {
      scrollTo("repos");
    } else if (activeMenu === "home") {
      scrollTo("home");
    }
    //eslint-disable-next-line
  }, [activeMenu]);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="bg-bg-bugday" ref={refs.home}>
        {isTabletOrMobile ? <MobileMenu /> : <NavBar />}
        <div className=" h-screen">
          <HomePage />
        </div>
      </div>
      <div className="h-screen w-screen overflow-y-hidden" ref={refs.games}>
        <Games />
      </div>
      <div className="h-screen w-screen overflow-y-hidden" ref={refs.websites}>
        <WebSites />
      </div>
      <div className="h-screen w-screen overflow-y-hidden" ref={refs.about}>
        <About />
      </div>
      <div className="h-screen w-screen overflow-y-hidden" ref={refs.repos}>
        <Repos />
      </div>
    </div>
  );
}

export default App;
