import Link from "next/link";
import React from "react";

const Menu = ({ open }) => {
  const menus = [
    { title: "Home", href: "/" },
    { title: "Authors", href: "dashboard/authors" },
    { title: "Books", href: "dashboard/books" },
    { title: "Collections", href: "dashboard/collections" },
    { title: "Publishers", href: "dashboard/publishers" },
    { title: "Works", href: "dashboard/works" },
    { title: "Settings", href: "dashboard/settings" },
  ];
  return (
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
  );
};

export default Menu;
