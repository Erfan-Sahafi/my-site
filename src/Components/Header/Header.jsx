import React from "react";
import './header.css'

const Header = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="custom-header mt-8 border-b-2 overflow-hidden flex flex-col md:flex-row md:justify-evenly items-center">
          <div className="flex flex-col gap-5">
            <div className="text-white font-IranSansBolddn text-2xl md:text-3xl">
              <p>محمد عرفان صحافی هستم.</p>
            </div>
            <div className="text-white font-IranSansBolddn text-xl md:text-2xl">
              <p>
                توسعه دهنده <span className="text-blue-400">فرانت اند</span>
              </p>
            </div>
            <div className="font-IranSans text-white w-[300px] md:w-[500px] text-justify">
              <p>
                برنامه نویس فرانت اند <span className="font-IranSansDemiBold text-xl text-blue-400">React js</span> یک سال هست که در ایـن زمینـه
                فعـالیت میکنـم و بسـیار مشتـاقم بـا انگیزه و روحیه ای که دارم با
                چالش های جدیدی رو به رو بشم و تجربه های جدید کسب کنم.
              </p>
            </div>
          </div>
          <div className="h-full flex">
            <img src="/images/me.png" alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
