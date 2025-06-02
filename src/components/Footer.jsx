import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center md:items-start bg-primary py-10">
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-background px-10 py-3 text-sm lg:text-base">
          <span className="uppercase tracking-widest">Reservations</span>
          <Link
            href="/booking"
            className="uppercase border border-background px-3 py-1 hover:bg-secondary hover:border-secondary hover:text-primary transition-all ease-linear"
          >
            Book a table
          </Link>
          <span className="uppercase tracking-widest pt-1">Opening Hours</span>
          <span className="text-center">Every Day: 07:00PM - 02:00AM</span>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-background px-10 py-3 text-sm lg:text-base">
          <span className="uppercase font-semibold tracking-widest">
            Location
          </span>
          <span className="text-center">
            Av. Echouhada Rue Ahmed Chawqui Hivernage1
          </span>
          <span className="uppercase font-semibold tracking-widest pt-1">
            Phone
          </span>
          <Link
            href="http://wa.me/212675480101"
            className="text-center cursor-pointer"
          >
            +212 675-480101
          </Link>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-background px-10 py-3 text-sm lg:text-base">
          <span className="uppercase font-semibold tracking-widest">Email</span>
          <span className="text-center">
            reservation@le-palacemarrakech.com
          </span>
          <span className="uppercase font-semibold tracking-widest pt-1">
            Social
          </span>
          <div className="w-full flex justify-center items-center gap-2">
            <Link href="http://wa.me/212675480101" target="_blank">
              <FaWhatsappSquare size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/lepalacemarrakech"
              target="_blank"
            >
              <FaInstagramSquare size={25} />
            </Link>
            <Link
              href="mailto:reservation@le-palacemarrakech.com"
              target="_blank"
            >
              <FaMailBulk size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-center py-2 bg-secondary text-primary text-sm">
        © 2025 Le Palace. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
