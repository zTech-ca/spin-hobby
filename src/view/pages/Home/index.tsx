import React, { useEffect, useState } from "react";
import Header, { ISlide } from "./Header";
import FeaturedMerchandise from "./FeaturedMerchandise";
import { Categories, TabDisplay, GroupDisplay } from "./Merchandise";
import { getHomeData } from "../../../api";
import { IMerchPreview, IGroupedMerchPreview, ICategory } from "../../../ts";

export interface IHomeData {
  header: ISlide[];
  featured: IMerchPreview[];
  merchs: IGroupedMerchPreview[];
  categories: ICategory[];
}

// Loading component
function LoadingSpinner() {
  return (
    <div className="home-loading">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading amazing anime merchandise...</p>
      </div>
    </div>
  );
}

// Error component
function ErrorMessage({ error }: { error: any }) {
  return (
    <div className="home-error">
      <div className="error-message">
        <h3>Oops! Something went wrong</h3>
        <p>
          We couldn't load the home page data. Please try refreshing the page.
        </p>
        <details>
          <summary>Error details</summary>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </details>
      </div>
    </div>
  );
}

export default function Home() {
  const [homeData, setHomeData] = useState<IHomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    getHomeData()
      .then((data) => {
        setHomeData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error loading home route: ", err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!homeData) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header slides={homeData.header} />
      <div className="home-main">
        <FeaturedMerchandise merchs={homeData.featured} />
        <div className="home-main-padded">
          <TabDisplay />
          <Categories categories={homeData.categories} />
          <GroupDisplay merchs={homeData.merchs} />
        </div>
      </div>
    </>
  );
}
