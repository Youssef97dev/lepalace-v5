"use client";

import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";

// import required modules
import { EffectCube, Navigation } from "swiper/modules";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { MoonLoader } from "react-spinners";
import Image from "next/image";
import Toolbar from "@/components/Toolbar";

const MenuSlides = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);
  return !isClient ? (
    <div className="w-full h-[60vh] lg:h-screen flex justify-center items-center">
      <MoonLoader size={60} color="#6c0c0d" loading />
    </div>
  ) : (
    <>
      <Toolbar gallery={true} />
      <div className="relative px-2 py-32 lg:px-72 lg:py-40">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[EffectCube, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/menu/menu-001.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/menu/menu-002.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/menu/menu-003.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/menu/menu-004.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/menu/menu-005.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/menu/menu-006.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/menu/menu-007.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/menu/menu-008.jpg"
              alt="menu le palace Marrakech"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </SwiperSlide>

          <button className="swiper-button-prev-ex1 grid place-content-center left-[41%] lg:-left-16 px-0.5 py-0.5 lg:px-4 lg:py-4 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[105%] lg:top-1/2 -translate-y-1/2 mb-3">
            <RiArrowLeftSLine size={25} />
          </button>
          <button className="swiper-button-next-ex1 grid place-content-center right-[41%] lg:-right-16 px-0.5 py-0.5 lg:px-4 lg:py-4 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[105%] lg:top-1/2 -translate-y-1/2 mb-3">
            <RiArrowRightSLine size={25} />
          </button>
        </Swiper>
      </div>
    </>
  );
};

export default MenuSlides;
