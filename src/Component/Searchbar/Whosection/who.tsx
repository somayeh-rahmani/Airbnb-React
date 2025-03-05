import { useState, useRef, useEffect } from "react";
import iconsearch from "/src/asset/icon/iconsearch.svg";
import plus from "/src/asset/icon/plus.svg";
import subtrac from "/src/asset/icon/subtraction.svg";
import close from "/src/asset/icon/close.svg";

const Whopart = () => {
  const [openWho, setOpenWho] = useState(false);
  const whoRef = useRef<HTMLDivElement | null>(null);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  const maxAdults = 16;
  const maxChildren = 16;
  const maxInfants = 5;
  const maxPets = 5;

  const handleIncrement = (category: string) => {
    if (category === "adult") setAdultCount(adultCount + 1);
    else if (category === "children") setChildrenCount(childrenCount + 1);
    else if (category === "infant") setInfantCount(infantCount + 1);
    else if (category === "pet") setPetCount(petCount + 1);
  };

  const handleDecrement = (category: string) => {
    if (category === "adult" && adultCount > 0) setAdultCount(adultCount - 1);
    else if (category === "children" && childrenCount > 0)
      setChildrenCount(childrenCount - 1);
    else if (category === "infant" && infantCount > 0)
      setInfantCount(infantCount - 1);
    else if (category === "pet" && petCount > 0) setPetCount(petCount - 1);
  };

  const updateIncrementButtonDisable = () => {
    return {
      adultDisabled: adultCount >= maxAdults,
      childrenDisabled: childrenCount >= maxChildren - adultCount,
      infantDisabled: infantCount >= maxInfants,
      petDisabled: petCount >= maxPets,
    };
  };

  const { adultDisabled, childrenDisabled, infantDisabled, petDisabled } =
    updateIncrementButtonDisable();

  const totalGuests = adultCount + childrenCount;
  const infantText =
    infantCount > 0
      ? `, ${infantCount} infant${infantCount > 1 ? "s" : ""}`
      : "";
  const petText =
    petCount > 0 ? `${petCount} pet${petCount > 1 ? "s" : ""}` : "";

  useEffect(() => {
    document.addEventListener("click", function (e: MouseEvent) {
      if (!whoRef?.current?.contains(e.target as Node)) {
        setOpenWho(false);
      }
    });
  }, []);

  return (
    <div
      className="who_section active_box"
      onClick={() => setOpenWho(true)}
      ref={whoRef}>
      <div className="parent-who" ref={whoRef}>
        <div className="who_content">
          <div className="who_title">Who</div>
          <div className="add_guests subtitle_color">
            {totalGuests > 0
              ? `${totalGuests} guests ${infantText} ${petText}`
              : "Add guests"}
          </div>
        </div>
        {openWho && whoRef && (
          <div
            className="clear_btn"
            onClick={(e) => {
              e.stopPropagation();
              setOpenWho(false);
            }}>
            <img src={close} alt="close-icon" />
          </div>
        )}
      </div>
      {/*drop Down */}

      {openWho && (
        <div id="who-dropdown" className="who-container show-dropdown">
          <div className="who-around">
            <div className="Adult-part">
              <div className="title-select">
                <h3>Adults</h3>
                <span>Ages 13 or above</span>
              </div>
              <div className="button-select">
                <button
                  className="decrement"
                  onClick={() => handleDecrement("adult")}
                  disabled={adultCount <= 0}>
                  <span>
                    <img src={subtrac} />
                  </span>
                </button>
                <span className="display">{adultCount}</span>
                <button
                  className="increment"
                  onClick={() => handleIncrement("adult")}
                  disabled={adultDisabled}>
                  <span>
                    <img src={plus} />
                  </span>
                </button>
              </div>
            </div>
            <div className="children_part">
              <div className="title-select">
                <h3>Children</h3>
                <span>Ages 2 – 12</span>
              </div>
              <div className="button-select">
                <button
                  className="decrement"
                  onClick={() => handleDecrement("children")}
                  disabled={childrenCount <= 0}>
                  <span>
                    <img src={subtrac} />
                  </span>
                </button>
                <span id="display" className="display">
                  {childrenCount}
                </span>
                <button
                  className="increment"
                  onClick={() => handleIncrement("children")}
                  disabled={childrenDisabled}>
                  <span>
                    <img src={plus} />
                  </span>
                </button>
              </div>
            </div>
            <div className="infants_part">
              <div className="title-select">
                <h3>Infants</h3>
                <span>Under 2</span>
              </div>
              <div className="button-select">
                <button
                  className="decrement"
                  onClick={() => handleDecrement("infant")}
                  disabled={infantCount <= 0}>
                  <span>
                    <img src={subtrac} />
                  </span>
                </button>
                <span className="display">{infantCount}</span>
                <button
                  className="increment"
                  onClick={() => handleIncrement("infant")}
                  disabled={infantDisabled}>
                  <span>
                    <img src={plus} />
                  </span>
                </button>
              </div>
            </div>
            <div className="pets_part">
              <div className="title-select">
                <h3>Pets</h3>
                <span>
                  <a href="#">Bringing a service animal?</a>
                </span>
              </div>
              <div className="button-select">
                <button
                  className="decrement"
                  onClick={() => handleDecrement("pet")}
                  disabled={petCount <= 0}>
                  <span>
                    <img src={subtrac} />
                  </span>
                </button>
                <span className="display">{petCount}</span>
                <button
                  className="increment"
                  onClick={() => handleIncrement("pet")}
                  disabled={petDisabled}>
                  <span>
                    <img src={plus} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="search_btn">
        {/* <button> */}
        <img src={iconsearch} alt="" className="searchImg" />
        {/* <span className="search_content">Search</span> */}
        {/* </button> */}
      </div>
    </div>
  );
};
export default Whopart;
