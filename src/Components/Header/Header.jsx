import React, { useEffect } from "react";
import "./header.css";
import { social } from "../../data";
import { IoMdCloudDownload } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="custom-header mt-8 border-b-2 overflow-hidden flex flex-col md:flex-row md:justify-evenly items-center">
          <div className="flex flex-col gap-3">
            <div className="text-white font-IranSansBolddn text-2xl md:text-3xl">
              <p>محمد عرفان صحافی هستم.</p>
            </div>
            <div className="text-white font-IranSansBolddn text-xl md:text-2xl">
              <p>
                توسعه دهنده <span className="text-blue-400">فرانت اند</span>
              </p>
            </div>
            <div className="font-IranSans text-white w-[300px] md:w-[500px] text-justify mb-2 md:mb-4">
              <p>
                بیش از دو ساله توی این حوزه کار می‌کنم. عاشق چالش‌های جدیدم و
                همیشه دنبال یادگیری و بهتر شدن هستم. دوست دارم تجربه‌های تازه
                کسب کنم و چیزایی بسازم که کاربرا ازشون لذت ببرن.✌️🚀
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
              <div className="flex items-center justify-center gap-4 text-white text-2xl md:text-3xl">
                {social.map((item) => (
                  <a
                    href={`${
                      item.title === "email"
                        ? `mailto: ${item.href}`
                        : `${item.href}`
                    }`}
                    target="_blank"
                    key={item.id}
                    className="flex flex-col gap-1 items-center"
                  >
                    {item.icon}
                    <span className="text-xs font-IranSansdn uppercase">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
              <div className="font-IranSansDemiBold text-white">
                <a
                  href="/files/erfan.pdf"
                  className="flex items-center gap-4 bg-blue-500 px-3 py-2 md:px-5 md:py-3 rounded-full ease-in duration-200 hover:bg-blue-600"
                  download={true}
                >
                  دانلود رزومه
                  <IoMdCloudDownload className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="h-full flex" data-aos="fade-up">
            <img src="/images/me.png" alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
