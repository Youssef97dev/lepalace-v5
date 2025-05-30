"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Container from "./Container";
import Toolbar from "@/components/Toolbar";

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
          <Toolbar gallery={true} />
          <Container />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
          <BounceLoader color="#6c0c0d" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
