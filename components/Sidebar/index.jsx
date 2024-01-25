"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import Logo from "./Logo";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  
  return (
    <section
      className={`${
        open ? `w-72` : `w-20`
      } duration-300 h-screen relative bg-swift-purple-950 p-5 pt-8`}
    >
      <Image
        src="/assets/control.png"
        height={28}
        width={28}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-swift-purple-950 duration-300 ${
          !open && "rotate-180"
        }`}
        alt="control"
        onClick={() => setOpen(!open)}
      />
      <Logo open={open} />
      <Menu open={open} />
    </section>
  );
};

export default Sidebar;
