import React, { Fragment } from "react";
import { IGroupedMerchPreview, ICategory } from "../../../../types/interfaces";
import classNames from "classnames";
import { ExpandableSearch } from "../../../components/Searches";
import CardStandard from "./CardStandard";
import CardRounded from "./CardRounded";

export default function Merchandise({
  merchs,
}: {
  merchs: IGroupedMerchPreview[];
}) {
  function displayGroupedMerchs(
    groups: IGroupedMerchPreview[],
    isSubGroup = false
  ) {
    return groups.map((group, index) => (
      <Fragment key={index}>
        <div className="home-merchs-group">
          <div
            className={classNames([
              "home-merch-headline-wrapper",
              {
                "home-merch-headline-group": !isSubGroup,
                "home-merch-headline-subgroup": isSubGroup,
              },
            ])}
          >
            <span>
              <h2>{group.name}</h2>
            </span>
            <span className="home-merch-group-see-more">See more</span>
            <span className="home-merch-group-search">
              <ExpandableSearch
                onSubmit={handleSearchSubmit}
                placeholder="Search this category..."
              />
            </span>
          </div>
          {!!group.merchs.length && (
            <div className="home-merch-cards-container">
              {group.merchs.map((merch, index) => (
                <CardStandard key={index} merch={merch} />
              ))}
            </div>
          )}
        </div>
        {group.subGroups && displayGroupedMerchs(group.subGroups, true)}
      </Fragment>
    ));

    function handleSearchSubmit() {
      // Add the submission handler here
    }
  }

  return <div className="home-merchs">{displayGroupedMerchs(merchs)}</div>;
}

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
