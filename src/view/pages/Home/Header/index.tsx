import React, { useState, useEffect } from "react";
import classNames from "classnames";

const AUTOCHANGE_TIME = 10000;
const IMAGE_PARTS = 4;

export interface ISlide {
  headline: string;
  subheading?: string;
  img: string;
}

interface ISlideDisplay {
  activeSlide: number;
  prevSlide: number;
}

interface Props {
  slides: ISlide[];
}

export default function Header({ slides }: Props) {
  const [sliderReady, setSliderReady] = useState<boolean>(false);
  const [slideDisplay, setSlideDisplay] = useState<ISlideDisplay>({
    activeSlide: 0,
    prevSlide: -1,
  });

  useEffect(() => {
    setSliderReady(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDisplay(getNextSlideDisplay(1, slideDisplay, slides.length));
    }, AUTOCHANGE_TIME);
    return () => {
      clearTimeout(timer);
    };
  }, [slideDisplay, slides]);

  function flipSlide(change: number) {
    setSlideDisplay(getNextSlideDisplay(change, slideDisplay, slides.length));
  }

  function getNextSlideDisplay(
    change: number,
    slideDisplay: ISlideDisplay,
    nSlides: number
  ) {
    const nextSlide = slideDisplay.activeSlide + change;
    if (nextSlide >= 0) {
      return {
        activeSlide: nextSlide % nSlides,
        prevSlide: slideDisplay.activeSlide,
      };
    } else {
      const subtraction = Math.abs(nextSlide) % nSlides;
      return {
        activeSlide: subtraction ? nSlides - subtraction : 0,
        prevSlide: slideDisplay.activeSlide,
      };
    }
  }

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      <div className="home-header-gradient" />
      <p className="slider__top-heading">Welcome, Spin Hobbyist!!</p>
      <div className="slider__slides">
        {slides.map((slide: ISlide, index: number) => (
          <div
            className={classNames("slider__slide", {
              "s--active": slideDisplay.activeSlide === index,
              "s--prev": slideDisplay.prevSlide === index,
            })}
            key={slide.headline}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.subheading || slide.headline}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.headline.split("").map((l: string, i: number) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill(null)].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => flipSlide(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => flipSlide(1)}
      />
    </div>
  );
}
