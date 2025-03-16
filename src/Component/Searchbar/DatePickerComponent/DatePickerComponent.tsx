import { useEffect, useRef, useState } from "react";
import DatePicker from "./DatePicker";
import DateOptionBtn from "./DateOption";
import moment from "moment";
import close from "/src/asset/icon/close.svg";
import date from "/src/asset/icon/date.svg";

const DatePickerComponent = () => {
  const [openCheckin, setOpenCheckin] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [activeOption, setActiveOption] = useState("Dates");
  const checkinRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);

  //data picker
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [dateOptionBtn, setDateOptionBtn] = useState<any>(0);
  const [trueFlexible, setTrueFlexible] = useState();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        checkinRef.current &&
        !checkinRef.current.contains(e.target as Node) &&
        checkoutRef.current &&
        !checkoutRef.current.contains(e.target as Node)
      ) {
        setOpenCheckin(false);
        setOpenCheckout(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
    setOpenCheckin(true);
  };

  return (
    <>
      {/* Checkin section
      <div className="checkin_section active_box" ref={checkinRef}>
        <div className="dates-text">
          <div
            className="checkin_title"
            onClick={() => {
              setOpenCheckin(true);
            }}
          >
            Check in
          </div>
          <div
            className={`checkin_date subtitle_color ${
              startDate ? "selected-date" : ""
            }`}
            onClick={() => setOpenCheckin(true)}
          >
            {startDate ? startDate.format("YYYY-MM-DD") : "Add Date"}
          </div>
        </div>
        {openCheckin && startDate && (
          <div
            className="clear_btn"
            onClick={() => {
              setStartDate(null);
            }}
          >
            <img src={close} alt="close-icon" />
          </div>
        )}

        {openCheckin && (
          <div className="checkin-container">
            <div className="button-contain">
              {["Dates", "Flexible"].map((Option) => (
                <button
                  key={Option}
                  className={`toggle-option ${
                    activeOption === Option ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick(Option)}
                >
                  {Option}
                </button>
              ))}
            </div>
            {activeOption === "Dates" && (
              <>
                <DatePicker
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
                <DateOptionBtn
                  onSelect={(value) => setDateOptionBtn(value)}
                  selectedValue={dateOptionBtn}
                />
              </>
            )}
            {activeOption === "Flexible" && (
              <div className="flexible-container">
                <div className="stay-option">
                  <h3>Stay for a week</h3>
                  <div className="stay-button">
                    {["Weekend", "Week", "Month"].map((option) => (
                      <button
                        key={option}
                        className={`date-option ${
                          dateOptionBtn === option ? "active" : ""
                        }`}
                        onClick={() => setDateOptionBtn(Option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="month-option">
                  <h3>Go anytime</h3>
                  <div className="month-list">
                    {[
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month) => (
                      <div key={month} className="month-item">
                        <img src={date} />
                        <span>{month} 2025</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="header_divider"></div>
      {/* checkout section */}
      {/* <div className="checkout_section active_box" ref={checkoutRef}>
        <div className="dates-text">
          <div
            className="checkout_title"
            onClick={() => {
              setOpenCheckout(true);
            }}
          >
            Check out
          </div>
          <div
            className={`checkout_date subtitle_color ${
              endDate ? "selected-date" : ""
            }`}
            onClick={() => setOpenCheckout(true)}
          >
            {endDate ? endDate.format("YYYY-MM-DD") : "Add dates"}
          </div>
        </div>
        {openCheckout && endDate && (
          <div
            className="clear_btn"
            onClick={() => {
              setEndDate(null);
            }}
          >
            <img src={close} alt="close-icon" />
          </div>
        )}
        {openCheckout && (
          <div className="checkin-container">
            <div className="button-contain">
              {["Dates", "Flexible"].map((Option) => (
                <button
                  key={Option}
                  className={`toggle-option ${
                    activeOption === Option ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveOption(Option);
                    if (Option === "Dates") {
                      setShowDatePicker(true);
                    } else {
                      setShowDatePicker(false);
                    }
                  }}
                >
                  {Option}
                </button>
              ))}
            </div>
            {showDatePicker && (
              <>
                <DatePicker
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
                <DateOptionBtn
                  onSelect={(value) => setDateOptionBtn(value)}
                  selectedValue={dateOptionBtn}
                />
              </>
            )}
          </div>
        )}
      </div> */}
    </>
  );
};

export default DatePickerComponent;
