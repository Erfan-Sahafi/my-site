import React, { useEffect, useState } from "react";
import "./SkillCards.css";

const SkillCards = (props) => {
  // const [anime, setAnime] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnime(!anime);
  //   }, 5000);
  // }, [anime]);
  

  return (
    <div className="parent">
      <div className="card">
        <div className="percent" style={{ '--ringcl':`${props.color}`,'--num':`${props.percent}` }}>
          <div className="dot"></div>
          <svg>
            <circle cx={70} cy={70} r={70}></circle>
            <circle cx={70} cy={70} r={70} ></circle>
          </svg>
          <div className="number">
            <h2>
              <span>%</span>
              {props.percent}
            </h2>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
