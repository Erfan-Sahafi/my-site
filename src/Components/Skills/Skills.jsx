import React, { useRef } from "react";
import Title from "../Title/Title";
import { skills } from "../../data";
import SkillCards from "../SkillCards/SkillCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Skills = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container">
      <Title id="skill" title="مهارت ها" />
      <div className="w-full md:w-[90%] hidden mx-auto sm:flex sm:gap-x-8 sm:gap-y-5 justify-center items-center flex-wrap">
        {skills.map((skill) => (
          <SkillCards key={skill.id} {...skill} />
        ))}
      </div> 
      <Swiper
        slidesPerView={"1.3"}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
        modules={[ Autoplay]}
        className="mySwiper mx-auto sm:hidden"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.id} className="mb-8">
            <SkillCards {...skill} />
          </SwiperSlide>
        ))}
        <div className="hidden autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper> 
    </div>
  );
};

export default Skills;
