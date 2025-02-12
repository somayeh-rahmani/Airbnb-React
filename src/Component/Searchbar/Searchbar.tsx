import { useRef } from "react";
import "./Searchbar.css";
import Checkin from "./Checkin/Checkin.tsx";
import Checkout from "./Checkout/Checkout.tsx";
import Whopart from "./Whosection/who.tsx";
import Wherepart from "./Wheresection/Where.tsx";

function SearchBar() {
  const innerSearch = useRef(null);
  return (
    <div className="container">
      <div className="search_box_container">
        <div className="inner_search_box" ref={innerSearch}>
          <Wherepart />
          <div className="header_divider"></div>
          <Checkin />
          <div className="header_divider"></div>
          <Checkout />
          <div className="header_divider"></div>
          <Whopart />
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
