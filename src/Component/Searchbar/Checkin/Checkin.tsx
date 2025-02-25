import { useEffect, useRef, useState } from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";
import "global";
import DateOptionBtn from "./DateOption";

const Checkin = () => {
  const [opencheckin, setOpenCheckin] = useState(false);
  const [activeOption, setActiveOption] = useState("Dates");
  const checkinRef = useRef<HTMLDivElement>(null);
  const [inputDate, setInputDate] = useState("");

  //data picker
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<any>(null);
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [dateOptionBtn, setDateOptionBtn] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!checkinRef?.current?.contains(e.target as Node)) {
        setOpenCheckin(false);
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
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        readOnly
      />

      {opencheckin && (
        <div className="checkin-container">
          <div className="button-contain">
            {["Dates", "Felexible"].map((Option) => (
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
              <DayPickerRangeController
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
                  if (startDate && !endDate) {
                    setInputDate(startDate.format("YYYY-MM-DD"));
                    setFocusedInput(endDate);
                  }
                }}
                focusedInput={focusedInput}
                onFocusChange={(focused: any) => setFocusedInput(focused)}
                numberOfMonths={2}
                // isOutsideRange={() => false}
                hideKeyboardShortcutsPanel={true}
                noBorder={true}
                verticalSpacing={8}
                // isDayHighlighted
              />
              <DateOptionBtn
                onSelect={(value) => setDateOptionBtn(value)}
                selectedValue={dateOptionBtn}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Checkin;
