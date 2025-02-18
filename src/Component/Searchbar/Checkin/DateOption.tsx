import React from "react";

const flexibleOptions = [
  { label: "Exact dates", value: 0 },
  { label: "± 1 day", value: 1 },
  { label: "± 2 days", value: 2 },
  { label: "± 3 days", value: 3 },
  { label: "± 7 days", value: 7 },
  { label: "± 14 days", value: 14 },
];

interface FlexibleButtonsProps {
  onSelect: (value: number) => void;
  selectedValue: number;
}

const DateOptionBtn: React.FC<FlexibleButtonsProps> = ({
  onSelect,
  selectedValue,
}) => {
  return (
    <div className="flexible-buttons">
      {flexibleOptions.map((option) => (
        <button
          key={option.value}
          className={`flexible-btn ${
            selectedValue === option.value ? "active" : ""
          }`}
          onClick={() => onSelect(option.value)}
        >
          {option.value !== 0}
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default DateOptionBtn;
