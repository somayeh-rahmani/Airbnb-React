import { useRef } from "react";
import "react-dates/lib/css/_datepicker.css";
import "./Searchbar.css";
import DatePickerComponent from "./DatePickerComponent/DatePickerComponent.tsx";
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
          <DatePickerComponent />
          <div className="header_divider"></div>
          <Whopart />
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
