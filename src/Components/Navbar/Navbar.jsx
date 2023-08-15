import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { navItem } from "../../data";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="container py-4 flex items-center justify-between">
        <div className="">
          <ul className="sm:flex gap-6 md:gap-12  hidden">
            {navItem.map((item) => (
              <li key={item.id} className="text-white">
                <a
                  href={`#${item.name}`}
                  className="font-IranSansDemiBold ease-in duration-200 hover:text-blue-400"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <RxHamburgerMenu
            onClick={() => setShowMobileMenu(true)}
            className="text-white text-3xl block sm:hidden"
          />
        </div>
        <div>
          <h1 className="text-white font-bold text-2xl">
            {"</ "}ERFAN <span className="text-blue-400">CODE</span>
            {" >"}
          </h1>
        </div>
      </div>
      <div>
        <div
          className={`absolute z-50 h-screen bg-zinc-800 top-0 w-full ${
            showMobileMenu
              ? "right-0 ease-linear duration-700"
              : "-right-[650px]"
          } sm:hidden`}
        >
          <div className="flex items-center p-2 justify-between w-full">
            <h1 className="text-white font-bold text-2xl">
              {"</ "}ERFAN <span className="text-blue-400">CODE</span>
              {" >"}
            </h1>
            <IoIosClose
              onClick={() => setShowMobileMenu(false)}
              className="text-white text-3xl cursor-pointer"
            />
          </div>
          <div className="w-full mt-16">
            <ul className="font-IranSansDemiBold text-white flex flex-col gap-8 px-4">
              {navItem.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  {item.iconName}
                  <a
                    href={`#${item.name}`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
