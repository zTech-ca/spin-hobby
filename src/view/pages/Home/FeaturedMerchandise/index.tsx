import React from "react";
import { FeaturedMerch } from "../../../components/Cards";
import { IMerchPreview } from "../../../../ts";
import { Ripple } from "../../../components/Buttons";
import { WavySlideshow } from "./WavySlideshow";
import classnames from "classnames";

export interface Props {
  merchs: IMerchPreview[];
}

const FEATURED_MERCHANDISE_CLASS = "cards-featured-merch-measure-class";

export default function FeaturedMerchandise({ merchs }: Props) {
  return (
    <>
      <WavySlideshow merchs={merchs} />
      <FeaturedMerchandiseSimple merchs={merchs} />
    </>
  );
}

export function FeaturedMerchandiseSimple({ merchs }: Props) {
  function getMerchCards() {
    if (!merchs.length) return null;
    const rowTypes = {
      one: [] as number[],
      two: [] as number[],
    };
    const remainder = merchs.length % 3;
    const nStandardCards = Math.floor(merchs.length / 3) * 3;
    if (remainder) {
      if (!nStandardCards) {
        if (remainder === 1) rowTypes.one.push(0);
        else if (remainder === 2)
          rowTypes.two.push(merchs.length - 2, merchs.length - 1);
      } else {
        if (remainder === 2)
          rowTypes.two.push(merchs.length - 2, merchs.length - 1);
        else if (remainder === 1) {
          for (let i = 0; i < 4; rowTypes.two.push(merchs.length - 4 + i++)) {}
        }
      }
    }
    return merchs.map((merch, index) => {
      return (
        <div
          key={index}
          className={classnames([
            "home-featured-merchs-simple-card",
            {
              "home-featured-merchs-simple-card-block-2":
                rowTypes.two.includes(index),
              "home-featured-merchs-simple-card-block-1":
                rowTypes.one.includes(index),
            },
          ])}
        >
          <div className="home-featured-merchs-simple-title">
            <div className="home-featured-merchs-simple-title-container">
              <h2>{merch.title} df fdasfads</h2>
            </div>
          </div>
          <div className="home-featured-merchs-simple-card-image-container">
            <img src={merch.img} alt={merch.img} />
          </div>
        </div>
      );
    });
  }

  return <div className="home-featured-merchs-simple">{getMerchCards()}</div>;
}

export function FeaturedMerchandiseCards({ merchs }: Props) {
  return (
    <>
      <div className="home-featured-merchs">
        {merchs.map((merch, index) => (
          <Ripple key={index} classes="home-ripple-featured-card">
            <FeaturedMerch
              {...merch}
              additionalClassNames={FEATURED_MERCHANDISE_CLASS}
            />
          </Ripple>
        ))}
      </div>
    </>
  );
}
