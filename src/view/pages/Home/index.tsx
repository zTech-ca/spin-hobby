import React, { useEffect, useState } from "react";
import Header, { ISlide } from "./Header";
import FeaturedMerchandise from "./FeaturedMerchandise";
import Merchandise, { Categories } from "./Merchandise";
import { getHomeData } from "../../../api";
import {
  IMerchPreview,
  IGroupedMerchPreview,
  ICategory,
} from "../../../types/interfaces";

export interface IHomeData {
  header: ISlide[];
  featured: IMerchPreview[];
  merchs: IGroupedMerchPreview[];
  categories: ICategory[];
}

export default function Home() {
  const [homeData, setHomeData] = useState<IHomeData | null>(null);

  useEffect(() => {
    getHomeData()
      .then((data) => setHomeData(data))
      .catch((err) => console.log("Error loading home route: ", err));
  }, []);

  if (!homeData) return null; // Replace with loading UI
  return (
    <>
      <Header slides={homeData.header} />
      <div className="home-main">
        <FeaturedMerchandise merchs={homeData.featured} />
        <div className="home-main-padded">
          <Categories categories={homeData.categories} />
          <Merchandise merchs={homeData.merchs} />
        </div>
      </div>
    </>
  );
}
