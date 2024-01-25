import Image from "next/image";
import React from "react";

const Logo = ({ open }) => {
  return (
    <div className="flex gap-x-4 items-center">
      <Image
        src="/assets/logo.png"
        height={70}
        width={70}
        alt="Swift logo"
        className={`rounded-full cursor-pointer duration-500 ${
          open && "rotate-[360deg]"
        }`}
      />
      <h1
        className={`text-white origin-left font-medium text-xl duration-200 ${
          !open && `scale-0`
        }`}
      >
        Swift
      </h1>
    </div>
  );
};

export default Logo;
