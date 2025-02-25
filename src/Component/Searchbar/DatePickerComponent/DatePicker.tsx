import { useState } from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";
import "global";

interface DatePickerProps {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  setStartDate: (date: moment.Moment | null) => void;
  setEndDate: (date: moment.Moment | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [focusedInput, setFocusedInput] = useState<any>("startDate");

  return (
    <DayPickerRangeController
      startDate={startDate}
      startDateId="start_date_id"
      endDate={endDate}
      endDateId="end_date_id"
      onDatesChange={(dates: {
        startDate: moment.Moment | null;
        endDate: moment.Moment | null;
      }) => {
        setStartDate(dates.startDate);
        setEndDate(dates.endDate);
      }}
      focusedInput={focusedInput}
      onFocusChange={(focused: any) => setFocusedInput(focused || "startDate")}
      numberOfMonths={2}
      hideKeyboardShortcutsPanel={true}
      noBorder={true}
      verticalSpacing={8}
    />
  );
};

export default DatePicker;
