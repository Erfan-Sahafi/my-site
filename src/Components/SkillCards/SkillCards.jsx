import React, { useEffect, useState } from "react";
import "./SkillCards.css";

const SkillCards = () => {
  const [anime, setAnime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnime(!anime);
    }, 5000);
  }, [anime]);
  let x = "#04fc43";
  return (
    <div className="parent">
      <div className="card">
        <div className="percent">
          <div className={`dot ${anime ? "animate-Dote" : "animate-none"}`}></div>
          <svg>
            <circle cx={70} cy={70} r={70}></circle>
            <circle
              cx={70}
              cy={70}
              r={70}
              className={`${anime ? "animate-fadeIn" : "animate-none"}`}
              style={{ stroke: `${x}` }}
            ></circle>
          </svg>
          <div className="number">
            <h2>
              <span>%</span>
              85
            </h2>
            <p>HTML</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="percent">
          <div className="dot"></div>
          <svg>
            <circle cx={70} cy={70} r={70}></circle>
            <circle cx={70} cy={70} r={70} style={{ stroke: `${x}` }}></circle>
          </svg>
          <div className="number">
            <h2>
              <span>%</span>
              85
            </h2>
            <p>HTML</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="percent">
          <div className="dot"></div>
          <svg>
            <circle cx={70} cy={70} r={70}></circle>
            <circle cx={70} cy={70} r={70} style={{ stroke: `${x}` }}></circle>
          </svg>
          <div className="number">
            <h2>
              <span>%</span>
              85
            </h2>
            <p>HTML</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="percent">
          <div className="dot"></div>
          <svg>
            <circle cx={70} cy={70} r={70}></circle>
            <circle cx={70} cy={70} r={70} style={{ stroke: `${x}` }}></circle>
          </svg>
          <div className="number">
            <h2>
              <span>%</span>
              85
            </h2>
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
