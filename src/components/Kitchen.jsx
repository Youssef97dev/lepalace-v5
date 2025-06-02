"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
//import { TypeAnimation } from "react-type-animation";

const Kitchen = () => {
  const { t } = useTranslation();

  return (
    <div
      id="kitchen"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col p-3 gap-3"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/itilbalha7c23d4w4mgj"
          height={1000}
          width={1000}
          alt="le salama restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:block hidden`}
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/itilbalha7c23d4w4mgj"
          height={1000}
          width={1000}
          alt="le salama restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:hidden block`}
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-3 lg:p-20 p-2 text-primary">
          <b className="text-[22px] leading-[30px] tracking-[2px] font-azahra mb-2 px-2 2xl:px-12 text-secondary">
            {t("kitchen.title")}
          </b>
          <p className="text-[14px] font-light lg:font-normal text-justify tracking-wider leading-[28px] px-2 2xl:px-12">
            {t("kitchen.content_1")}
          </p>
          <p className="text-[14px] font-light lg:font-normal text-justify tracking-wider leading-[28px] px-2 2xl:px-12 ">
            {t("kitchen.content_2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
