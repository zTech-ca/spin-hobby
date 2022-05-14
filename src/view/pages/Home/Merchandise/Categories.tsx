import React from "react";
import CardRounded from "./CardRounded";
import { ICategory } from "../../../../ts";

export function Categories({ categories }: { categories: ICategory[] }) {
  if (!categories.length) return null;
  return (
    <div className="home-merchs">
      <div className="home-merchs-group">
        <div className="home-merch-headline-wrapper">
          <span>
            <h2>Browse by categories for more</h2>
          </span>
        </div>
        <div className="home-merch-cards-container">
          {categories.map((category, index) => (
            <CardRounded key={index} img={category.img} label={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
