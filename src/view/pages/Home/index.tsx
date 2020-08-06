import React, { useEffect, useState } from "react";
import Header, { ISlide } from "./Header";
import Merchandise from "./Merchandise";
import { getHomeData } from "../../../api";
import { IMerchPreview } from "../../../types/interfaces";

export interface IHomeData {
  header: ISlide[];
  merchs: IMerchPreview[];
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
        <Merchandise merchs={homeData.merchs} />
      </div>
    </>
  );
}
