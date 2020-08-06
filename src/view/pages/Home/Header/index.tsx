import React, { useState, useEffect } from "react";
import classNames from "classnames";

const AUTOCHANGE_TIME = 10000;
const IMAGE_PARTS = 4;

export interface ISlide {
  headline: string;
  subheading?: string;
  img: string;
}

interface Props {
  slides: ISlide[];
}

export default function Header({ slides }: Props) {
  const [sliderReady, setSliderReady] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [prevSlide, setPrevSlide] = useState<number>(-1);
  const [changeTO, setChangeTO] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

  useEffect(() => {
    if (!changeTO) {
      setChangeTO(
        setInterval(() => {
          changeSlides(1, slides.length);
        }, AUTOCHANGE_TIME)
      );
      setSliderReady(true);
    }
    return () => {
      if (changeTO) clearInterval(changeTO);
    };
  }, [slides, changeTO]);

  function flipSlide(change: number) {
    resetTimer();
    changeSlides(change, slides.length);
  }

  function resetTimer() {
    if (changeTO) clearInterval(changeTO);
    setChangeTO(
      setInterval(() => {
        changeSlides(1, slides.length);
      }, AUTOCHANGE_TIME)
    );
  }

  function changeSlides(change: number, nSlides: number) {
    setActiveSlide((prevSlide) => {
      setPrevSlide(prevSlide);
      const nextSlide = prevSlide + change;
      if (nextSlide >= 0) return nextSlide % nSlides;
      const subtraction = Math.abs(nextSlide) % nSlides;
      return subtraction ? nSlides - subtraction : 0;
    });
  }

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      <div className="home-header-gradient" />
      <p className="slider__top-heading">Travelers</p>
      <div className="slider__slides">
        {slides.map((slide: ISlide, index: number) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
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
