import Data from "./Data.tsx";
import Region from "./Region.tsx";
import "./Searchbar.css";

function SearchBar() {
  return (
    <div className="container">
      <div className="search_box_container">
        <div className="inner_search_box">
          <div className="where_section active_box ">
            <div className="where-title">Where</div>
            <input
              className="destination subtitle_color"
              placeholder="search destinations"
            />
            <div className="close_btn hide">
              <img src="./public/icons/icons8-close.svg" alt="close-icon" />
            </div>

            <div className="region_wrapper ">
              <div className="region_selection">
                <div className="region_title">
                  <h4>Search by region</h4>
                </div>
                <div className="region_items">
                  {Data.map((item): any => {
                    <Region
                      key={item.id}
                      name={item.name}
                      image={item.image}
                    />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="header_divider"></div>
          <div className="checkin_section active_box">
            <div className="checkin_title">Check in</div>
            <div className="checkin_date subtitle_color">Add dates</div>
          </div>
          <div className="header_divider"></div>
          <div className="checkout_section active_box">
            <div className="checkout_title">Check out</div>
            <div className="checkout_date subtitle_color">Add dates</div>
          </div>
          <div className="header_divider"></div>
          <div className="who_section active_box">
            <div className="who_content">
              <div className="who_title">Who</div>
              <div className="add_guests subtitle_color">Add guests</div>
            </div>
            <div className="search_btn">
              <button>
                <img src="./public/images/icons8-search.svg" alt="" />
                <span className="search_content">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
