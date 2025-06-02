"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Toolbar from "./Toolbar";
import Hero from "./Hero";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";
import About from "./About";
import Footer from "./Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative">
          <Toolbar />
          <Hero />
          <MobileContent />
          <DesktopContent />
          <About />
          <Footer />

          {/*<div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>*/}
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-primary">
          <BounceLoader color="#d7b072" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
