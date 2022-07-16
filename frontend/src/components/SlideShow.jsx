/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from "react";
import "../CSS/SlideShow.css";
import muscu from "../assets/muscu.jpg";
import cardio from "../assets/cardio.jpg";
import collectif from "../assets/cours-collectifs.jpg";

function SlideShow() {
  const colors = [
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

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
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
        {colors.map((data, index) => (
          <div className="slide" key={index}>
            {" "}
            {data.picture}{" "}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
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
