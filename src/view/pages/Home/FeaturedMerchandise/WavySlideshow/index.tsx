import React, { useEffect, useState } from "react";
import { Props } from "../index";

const activeDelay = 0.5;

export function WavySlideshow({ merchs }: Props) {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage((page + 1) % merchs.length);
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, [merchs, page]);

  function getDescription(description: string, active: boolean) {
    const words = description.split(" ");
    const factor = activeDelay / (words.length - 1);
    const inDelay = active ? activeDelay : 0;
    return (
      <div className="wavy-slideshow-item-description">
        {words.map((word, iLetter) => (
          <span key={iLetter} className="wavy-slideshow-vertical-part">
            <b
              style={{
                transitionDelay: `${iLetter * factor + inDelay}s`,
              }}
            >
              {iLetter ? <>&nbsp;</> : null}
              {word}
            </b>
          </span>
        ))}
      </div>
    );
  }

  function getTitle(title: string, active: boolean) {
    const factor = activeDelay / (title.length - 1);
    const inDelay = active ? activeDelay : 0;
    return title.split("").map((letter, iLetter) => (
      <div className="wavy-slideshow-vertical-part" key={iLetter}>
        <b
          style={{
            transitionDelay: `${iLetter * factor + inDelay}s`,
          }}
        >
          {letter === " " ? <>&nbsp;</> : letter}
        </b>
      </div>
    ));
  }

  if (!merchs.length) return null;
  return (
    <div className="wavy-slideshow">
      <div className="wavy-slideshow-container">
        <div className="wavy-slideshow-content-width">
          <div className="wavy-slideshow-slideshow">
            <div className="wavy-slideshow-slideshow-items">
              {merchs.map((merch, index) => (
                <div
                  key={index}
                  className={`wavy-slideshow-item${
                    index === page ? " wavy-slideshow-active" : ""
                  }`}
                >
                  <div className="wavy-slideshow-item-image-container">
                    <img
                      className="wavy-slideshow-item-image"
                      src={merch.img}
                      alt={merch.img}
                    />
                  </div>
                  <div className="wavy-slideshow-item-header">
                    {getTitle(merch.title, page === index)}
                  </div>
                  {getDescription(merch.description, index === page)}
                </div>
              ))}
            </div>
            <div className="wavy-slideshow-controls">
              <ul>
                {merchs.map((_, index) => (
                  <li
                    key={index}
                    className={index === page ? "wavy-slideshow-active" : ""}
                    onClick={() => setPage(index)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
