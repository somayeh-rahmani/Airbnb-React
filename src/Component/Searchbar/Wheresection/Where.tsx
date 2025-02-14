import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Data from "./Region/Data.tsx";
import Region from "./Region/Region.tsx";
import close from "/src/asset/icon/close.svg";

const Wherepart = forwardRef((_, ref) => {
  const [openregeion, setOpenregion] = useState(false);
  const innerSearch = useRef<HTMLDivElement | null>(null);
  const [inputsearch, setInputsearch] = useState("");

  useImperativeHandle(ref, () => ({
    getInnerrSearch: () => innerSearch.current,
  }));

  useEffect(() => {
    document.addEventListener("click", function (e: MouseEvent) {
      if (!innerSearch?.current?.contains(e.target as Node)) {
        setOpenregion(false);
      }
    });
  }, []);

  const handleSelectRegion = (name: string) => {
    setInputsearch(name);
    setOpenregion(false);
  };
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
        value={inputsearch}
        onChange={(e) => setInputsearch(e.target.value)}
      />

      {inputsearch && (
        <div className="clear_btn" onClick={() => setInputsearch("")}>
          <img src={close} alt="close-icon" />
        </div>
      )}

      {openregeion && (
        <div className="region_wrapper ">
          <div className="region_selection">
            <div className="region_title">
              <h4>Search by region</h4>
            </div>
            <div className="region_items">
              {Data.map((item: any) => {
                return (
                  <Region
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    onSelect={handleSelectRegion}
                  />
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
