import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchSelector } from "../../../selectors";
import { getSearch } from "../../../reducers";
// import { Operation } from "../../../reducers/cartReducer";
// import calculateSubTotal from "utils/calculateSubTotal";
// import Paypal from "../../components/Paypal";
import { FeaturedMerch, QuickView } from "../../components/Cards";
// import { IMerchPreview } from "../../../ts";
import { Ripple } from "../../components/Buttons";
import { SearchFilter } from "view/components/SearchFilter";

export default function Search() {
  const dispatch = useDispatch();
  const searchResult = useSearchSelector();
  // const [page, setPage] = useState<number>(0);

  useEffect(() => {
    dispatch(getSearch());
  }, [dispatch]);

  return (
    <>
      <SearchFilter />
      <div id="search-results">
        {searchResult &&
          [1, 2, 4, 5, 6].map((result, index) => (
            <QuickView
              key={index}
              name="Some Name"
              price={50}
              categories={["hololive", "vtuber"]}
              images={[
                "https://cdn.myanimelist.net/images/voiceactors/1/79215.jpg",
                "https://cdn.donmai.us/sample/88/42/__houshou_marine_and_houshou_marine_hololive_drawn_by_xia_0328__sample-8842da3aad86ed01cbca91ed98825cdc.jpg",
                "https://hololive.hololivepro.com/wp-content/uploads/2023/12/jacket1215-640x640.png",
              ]}
            />
          ))}
      </div>

      <div className="search-merchs">
        {searchResult &&
          searchResult.map((result, index) => (
            <Ripple key={index} classes="search-ripple-featured-card">
              <FeaturedMerch {...result} />
            </Ripple>
          ))}
      </div>
    </>
  );
}
