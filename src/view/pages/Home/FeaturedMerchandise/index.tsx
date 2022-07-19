import React, { useEffect, useState } from "react";
import { FeaturedMerch } from "../../../components/Cards";
import { IMerchPreview } from "../../../../ts";
import { Ripple } from "../../../components/Buttons";
import { useDimensions } from "../../../../customHooks";

interface Props {
  merchs: IMerchPreview[];
}

const FEATURED_MERCHANDISE_CLASS = "cards-featured-merch-measure-class";

export default function FeaturedMerchandise({ merchs }: Props) {
  const [minCardWidth, setMinCardWidth] = useState<number>(0);

  const { width } = useDimensions();

  useEffect(() => {
    const elements = document.getElementsByClassName(
      FEATURED_MERCHANDISE_CLASS
    );
    if (!elements.length) return;
    const totalWidth = Array.from(elements).reduce(
      (totalWidth, e) => totalWidth + e.clientWidth,
      0
    );
    setMinCardWidth(totalWidth);
  }, []);

  return (
    <>
      <div
        className="home-featured-merchs"
        style={width >= minCardWidth ? {} : { display: "none" }}
      >
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
