import React from "react";
import { FeaturedMerch } from "../../../components/Cards";
import { IMerchPreview } from "../../../../types/interfaces";
import { Ripple } from "../../../components/Buttons";

interface Props {
  merchs: IMerchPreview[];
}

export default function Merchandise({ merchs }: Props) {
  return (
    <>
      <div className="home-featured-merchs">
        {merchs.map((merch, index) => (
          <Ripple key={index} classes="home-ripple-featured-card">
            <FeaturedMerch {...merch} />
          </Ripple>
        ))}
      </div>
    </>
  );
}
