"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import { FaMailBulk } from "react-icons/fa";
import { PiInstagramLogo, PiWhatsappLogo } from "react-icons/pi";

const Toolbar = ({ gallery = false }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  return (
    <>
      <div
        className={`fixed z-30 top-0 w-full flex flex-col justify-center items-center transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-100"
        }`}
      >
        <div
          className={`w-full flex justify-between items-center px-3 lg:px-8 pt-2 py-0 lg:py-0 bg-secondary text-primary text-[12px] leading-[18px] `}
        >
          <button
            className="text-primary py-2 px-4 tracking-widest"
            onClick={() => changeLanguage(t("navbar.lang_code"))}
          >
            {t("navbar.lang_text")}
          </button>
          <div className="flex justify-center items-center gap-3 text-primary">
            <Link href="http://wa.me/212675480018" target="_blank">
              <PiWhatsappLogo size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/lesalamamarrakech/"
              target="_blank"
            >
              <PiInstagramLogo size={20} />
            </Link>
            <Link
              href="/booking"
              className="px-4 py-2 bg-primary rounded-t-md text-white block lg:hidden tracking-widest uppercase"
            >
              <span>{t("navbar.book")}</span>
            </Link>
          </div>
        </div>
        <nav
          className={`w-full hidden lg:block transition-all duration-200 ease-linear font-light px-10 ${
            isVisible && !gallery ? "bg-transparent" : "bg-primary"
          }`}
        >
          <div className="max-w-full mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/">
              <Image
                src={isVisible ? "/palace-logo.png" : "/palace-logo.png"}
                alt="le palace marrakech"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </Link>
            <ul
              className={`w-full flex justify-center items-center gap-8 text-[18px] leading-[54px] capitalize ${
                isVisible ? "text-white" : "text-secondary"
              }`}
            >
              <li>
                <Link href="/" className="cursor-pointer p-2">
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="cursor-pointer p-2">
                  {t("navbar.restaurant")}
                </Link>
              </li>
              <li>
                <Link href="#kitchen" className="cursor-pointer p-2">
                  {t("navbar.kitchen")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.lesalamamarrakech.com/menu/"
                  target="_blank"
                  className="cursor-pointer p-2"
                >
                  {t("navbar.menu")}
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="cursor-pointer p-2">
                  {t("navbar.gallery")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="cursor-pointer p-2">
                  {t("navbar.contact")}
                </Link>
              </li>
              <li>
                <Link href="/our-restaurants" className="cursor-pointer p-2">
                  {t("navbar.our")}
                </Link>
              </li>
            </ul>
            <Link
              href="/booking"
              className={`w-1/6 text-center tracking-widest uppercase px-6 py-3 text-[15px]  duration-200 transition-all rounded-tl-md rounded-br-md bg-secondary text-primary hover:bg-primary hover:text-secondary`}
            >
              {t("navbar.book")}
            </Link>
          </div>
        </nav>
        <div
          className={`w-full flex justify-between items-center lg:hidden transition-all duration-300 px-6 py-2 ${
            isVisible && !gallery ? "bg-transparent" : "bg-primary"
          }`}
        >
          <Link href="/">
            <Image
              src={isVisible ? "/palace-logo-white.png" : "/palace-logo.png"}
              alt="le palace marrakech"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>
          <div
            className={`${isVisible ? "text-white" : "text-secondary"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <RiArrowDropDownFill size={45} />
            ) : (
              <RiArrowDropUpFill size={45} />
            )}
          </div>
        </div>
      </div>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-y-full"
        enterTo="transform translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0"
        leaveTo="transform -translate-y-full"
      >
        <div className="fixed top-6 right-0 z-20 w-full h-screen bg-primary flex flex-col items-center justify-center gap-10">
          <ul
            className={`w-1/2 flex flex-col justify-center items-center text-center text-[18px] leading-[24px] capitalize px-2 font-extralight ${
              isVisible ? "text-white" : "text-secondary"
            }`}
          >
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/">{t("navbar.home")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="#restaurant">{t("navbar.restaurant")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="#kitchen">{t("navbar.kitchen")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/menu">{t("navbar.menu")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/gallery">{t("navbar.gallery")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/contact">{t("navbar.contact")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/our-restaurants">{t("navbar.our")}</Link>
            </li>
          </ul>
          <div className="w-1/2 flex flex-col justify-center items-center gap-3">
            <Link
              href="/booking"
              className={`w-3/4 text-primary text-center py-3 rounded-tl-md rounded-br-md ${
                isVisible ? "bg-white" : "bg-secondary"
              }`}
            >
              {t("navbar.book")}
            </Link>
            <div
              className={`w-3/4 py-3 flex justify-evenly items-center ${
                isVisible ? "text-white" : "text-secondary"
              }`}
            >
              <Link href="http://wa.me/212675480018" target="_blank">
                <PiWhatsappLogo size={25} />
              </Link>
              <Link
                href="https://www.instagram.com/lesalamamarrakech/"
                target="_blank"
              >
                <PiInstagramLogo size={25} />
              </Link>
              <Link
                href="mailto:reservations@lesalamamarrakech.com"
                target="_blank"
              >
                <FaMailBulk size={25} />
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Toolbar;
