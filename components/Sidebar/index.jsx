"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Home", href: "/" },
    { title: "Authors", href: "dashboard/authors" },
    { title: "Books", href: "dashboard/books" },
    { title: "Collections", href: "dashboard/collections" },
    { title: "Publishers", href: "dashboard/publishers" },
    { title: "Works", href: "dashboard/works" },
  ];

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
      <ul>
        {menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-swift-purple-900`}
          >
            <Link href={`/${menu.href}`} className="w-full">
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
