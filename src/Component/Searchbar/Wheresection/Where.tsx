import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Data from "./Region/Data.tsx";
import Region from "./Region/Region.tsx";

const Wherepart = forwardRef((_, ref) => {
  const [openregeion, setOpenregion] = useState(false);
  const innerSearch = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    getInnerrSearch: () => innerSearch.current,
  }));

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (!innerSearch?.current?.contains(e.target as Node)) {
        setOpenregion(false);
      }
    });
  }, []);
  return (
    <div
      className="where_section active_box "
      onClick={() => setOpenregion(true)}
      ref={innerSearch}
    >
      <div className="where-title">Where</div>
      <input
        className="destination subtitle_color"
        placeholder="search destinations"
      />
      <div className="close_btn ">
        <img src="./public/icons/icons8-close.svg" alt="close-icon" />
      </div>

      {openregeion && (
        <div className="region_wrapper ">
          <div className="region_selection">
            <div className="region_title">
              <h4>Search by region</h4>
            </div>
            <div className="region_items">
              {Data.map((item: any) => {
                return (
                  <Region key={item.id} name={item.name} image={item.image} />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
export default Wherepart;
