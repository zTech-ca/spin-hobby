import React from "react";
import { FeaturedMerch } from "../../../components/Cards";
import { IMerchPreview } from "../../../../types/interfaces";

interface Props {
  merchs: IMerchPreview[];
}

export default function Merchandise({ merchs }: Props) {
  return (
    <>
      {merchs.map((merch, index) => (
        <FeaturedMerch {...merch} />
      ))}
    </>
  );
}
