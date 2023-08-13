import React from "react";
import Title from "../Title/Title";
import { IoMdCloudDownload } from "react-icons/io";

const AboutMe = () => {
  return (
    <div className="md:container">
      <Title title="درباره من" />
      <div className="flex items-center flex-col md:flex-row">
        <div className="flex-1">
          <img src="/images/abuthero.png" alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex md:gap-12 p-1 justify-between sm:justify-evenly">
            <div>
              <ul className="flex flex-col gap-4">
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  نام:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    محمد عرفان
                  </span>
                </li>
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  نام خانوادگی:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    صحافی لطیف
                  </span>
                </li>
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  سن:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    21
                  </span>
                </li>
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  تحصیلات:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    دانشجو کارشناسی
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  رشته:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    مهندسی کامپیوتر
                  </span>
                </li>
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  دانشگاه:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    صنعتی شاهرود
                  </span>
                </li>
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  استان:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    سمنان
                  </span>
                </li>
                <li className="text-blue-400 font-IranSansBolddn text-xs xs:text-base md:text-xl">
                  شهرستان:
                  <span className="text-white mr-1 text-sm xs:text-base">
                    گرمسار
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 font-IranSansDemiBold text-white">
            <a href="/files/resome.pdf" className="flex items-center gap-4 bg-blue-500 px-5 py-3 rounded-full ease-in duration-200 hover:bg-blue-600" download={true}>
              دانلود رزومه
              <IoMdCloudDownload className="text-2xl"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
