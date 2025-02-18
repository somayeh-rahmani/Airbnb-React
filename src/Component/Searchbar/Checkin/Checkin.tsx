import { useEffect, useRef, useState } from "react";
import "./checkin.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "global";

const Checkin = () => {
  const [opencheckin, setOpenCheckin] = useState(false);
  const [activeOption, setActiveOption] = useState("Dates");
  const checkinRef = useRef<HTMLDivElement>(null);

  //data picker
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  // const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
  //   null
  // );
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!checkinRef?.current?.contains(e.target as Node)) {
        setOpenCheckin(false);
        setShowDatePicker(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="checkin_section active_box" ref={checkinRef}>
      <div
        className="checkin_title"
        onClick={() => {
          setOpenCheckin(true);
        }}
      >
        Check in
      </div>
      <input
        className="checkin_date subtitle_color"
        placeholder="Add dates"
        onClick={() => setOpenCheckin(true)}
      />

      {opencheckin && (
        <div className="checkin-container">
          <div className="button-contain">
            {["Dates", "Months", "Felixible"].map((Option) => (
              <button
                key={Option}
                className={`toggle-option ${
                  activeOption === Option ? "active" : ""
                }`}
                onClick={() => {
                  setActiveOption(Option);
                  if (Option === "dates") {
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
            <DateRangePicker
              startDate={startDate}
              startDateId="start_date_id"
              endDate={endDate}
              endDateId="end_Date_id"
              onDateChange={({
                startDate,
                endDate,
              }: {
                startDate: moment.Moment | null;
                endDate: moment.Moment | null;
              }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              // focusedInput={focusedInput}
              // onFocusChange={(focused) => setFocusedInput(focused)}
              numberofMonth={12}
              isOutsideRange={() => false}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Checkin;
