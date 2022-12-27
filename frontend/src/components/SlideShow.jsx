/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useRef, useState } from "react";
import "../CSS/SlideShow.css";
import muscu from "../assets/muscu.jpg";
import cardio from "../assets/cardio.jpg";
import collectif from "../assets/cours-collectifs.jpg";

function SlideShow() {
  const slidePictures = [
    {
      picture: (
        <div>
          <img className="photoHome" src={muscu} alt="img" />
        </div>
      ),
    },
    {
      picture: (
        <div>
          <img className="photoHome" src={cardio} alt="img" />
        </div>
      ),
    },
    {
      picture: (
        <div>
          <img className="photoHome" src={collectif} alt="img" />
        </div>
      ),
    },
  ];
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slidePictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slidePictures.map((data, index) => (
          <div className="slide" key={index}>
            {" "}
            {data.picture}{" "}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {slidePictures.map((_, idx) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
