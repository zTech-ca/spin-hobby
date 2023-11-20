import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchSelector } from "../../../selectors";
import { getSearch } from "../../../reducers";
// import { Operation } from "../../../reducers/cartReducer";
// import calculateSubTotal from "utils/calculateSubTotal";
// import Paypal from "../../components/Paypal";
import { FeaturedMerch } from "../../components/Cards";
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
