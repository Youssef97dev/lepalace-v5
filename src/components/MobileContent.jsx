"use client";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const content = [
  {
    id: "1",
    title: "RESTAURANT",
    text: "Cuisine d'ici et d'ailleurs",
    imgSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/l0ekp54asdehj5bpbgpg",
  },
  {
    id: "2",
    title: "DINING",
    text: "Savor exquisite flavors in a luxurious setting, perfect for intimate dinners and celebrations",
    imgSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/dokdf9zslixvlabjkfu3",
  },
  {
    id: "4",
    title: "CLUB",
    text: "Dance the night away with electrifying DJ shows, bringing vibrant energy to your evenings at Le Palace",
    imgSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/lesnfxobfrjphllm8gom",
  },
];

const MobileContent = () => {
  const [active, setActive] = useState("1");

  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  return (
    <div className="w-full block lg:hidden">
      {content.map((item, i) => (
        <div className="rounded" key={i}>
          <button
            type="button"
            className={`px-4 py-6 space-x-2 text-background font-thin text-[18px] leading-[18px] w-full flex items-center text-white-dark bg-gradient-to-b from-[#d37b5c] to-primary shadow-md ${
              active === item.id ? "hidden" : "block"
            }`}
            onMouseEnter={() => togglePara(item.id)}
          >
            <TiArrowSortedDown size={18} />
            <span>{item.title}</span>
          </button>
          <div>
            <AnimateHeight
              duration={300}
              height={active === item.id ? "auto" : 0}
            >
              <div
                className="relative bg-cover bg-center h-[50vh]"
                style={{
                  backgroundImage: `url('${item.imgSrc}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute  bottom-12 text-background w-full flex justify-start items-start gap-2 px-5">
                  <TiArrowSortedUp className="mt-1" size={18} />
                  <div className="w-full flex flex-col justify-center items-start">
                    <span className="font-light">{item.title}</span>
                    <span className="text-[14px] leading-[20px]">
                      {item.text}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateHeight>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileContent;
