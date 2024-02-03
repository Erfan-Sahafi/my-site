import React from "react";
import { FaReact } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="w-[400px] bg-[#2a2a2a] rounded-lg overflow-hidden ease-linear duration-200 hover:-translate-y-2">
      <div>
        <a href={props.href} target="_blank">
          <img
            src={props.img}
            className="w-full rounded-t-lg"
            alt="fastfood project"
          />
        </a>
      </div>
      <div className="flex flex-col gap-2 px-3 py-2">
        <h3 className="font-IranSansBold text-blue-500 text-xl">
          {props.title}
        </h3>
        <p className="font-IranSansdn leading-6 text-justify text-white tracking-tight">
          {props.desc}
        </p>
        <div className="flex gap-3 text-white items-center justify-end font-IranSansBolddn">
          {props?.technology?.map((tec) => (
            <span key={tec.id} className="flex items-center">
              {tec.title}
              {tec.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="p-2 font-IranSansBolddn flex items-center justify-center text-white">
        <a
          href={props.href}
          target="_blank"
          className=" px-5 py-2 border-2 text-blue-400 border-blue-400 rounded-lg ease-in duration-200 hover:bg-blue-400 hover:text-white"
        >
          مشاهده
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
