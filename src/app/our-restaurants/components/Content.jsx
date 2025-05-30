import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-14 h-full mt-20 lg:mt-40 gap-10">
      <strong className="text-[30px] leading-[31.2px] font-azahra pb-2 border-b border-primary text-primary">
        Nos Restaurants
      </strong>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <Link href="/" className="pb-3">
            <Image
              src="/lesalama-logo.png"
              alt="le salama marrakech"
              width={145}
              height={145}
              className="cursor-pointer"
            />
          </Link>
          <strong className="text-primary text-[18px] leading-[26.26px] mb-3 font-light">
            Restaurant
          </strong>
          <p className="text-comptoire_3 text-[16px] leading-[22.85px]">
            {`Jemaa el fna 40 Rue des Banques`}
            <br />
            {`Marrakech 40000, Maroc`}
            <br />
            {`+212 675-480018`}
            <br />
            {`reservations@lesalamamarrakech.com`}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-center">
          <Link href="/" className="pb-3">
            <Image
              src="/palace-logo-1.png"
              alt="le palace marrakech"
              width={145}
              height={145}
              className="cursor-pointer"
            />
          </Link>
          <strong className="text-primary text-[18px] leading-[26.26px] mb-3 font-light">
            Restaurant
          </strong>
          <p className="text-comptoire_3 text-[16px] leading-[22.85px]">
            {`Av. Echouhada Rue Ahmed`}
            <br />
            {`Chawqui Hivernage 1`}
            <br />
            {`+212 675-480101`}
            <br />
            {`reservations@le-palacemarrakech.com`}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-center">
          <Link href="/" className="pb-3">
            <Image
              src="/casalalla-logo.png"
              alt="casa lalla takerkoust"
              width={145}
              height={145}
              className="cursor-pointer"
            />
          </Link>
          <strong className="text-primary text-[18px] leading-[26.26px] mb-3 font-light">
            Restaurant
          </strong>
          <p className="text-comptoire_3 text-[16px] leading-[22.85px]">
            {`Lalla Takerkoust`}
            <br />
            {`Marrakech 40000, Maroc`}
            <br />
            {`+212 675-480103`}
            <br />
            {`reservations@casalallatakerkoust.com`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
