"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const imagesMobile = [
  "/images/palace-16.jpg",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/ymoxuobbyl4wwaecaiq0",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/ysb4cd0tvhqvjdbmrqtd",
];

const imagesDesktop = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/m0ufe0dqhtckvfcbwgba",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/eqwcinq59ce4ye5gmu6n",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/fkrdwoonvv9ugospbtsp",
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesDesktop.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-[60vh] block lg:hidden">
        {imagesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full "
            />
          </div>
        ))}
      </div>
      <div className="relative w-full h-screen hidden lg:block">
        {imagesDesktop.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slides;
