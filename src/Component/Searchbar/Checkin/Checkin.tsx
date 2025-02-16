import { useState } from "react";
import "./checkin.css";

const Checkin = () => {
  const [opencheckin, setOpenCheckin] = useState(false);
  const [activeOption, setActiveOption] = useState("Dates");
  return (
    <div
      className="checkin_section active_box"
      onClick={() => setOpenCheckin(true)}
    >
      <div className="checkin_title">Check in</div>
      <input className="checkin_date subtitle_color" placeholder="Add dates" />

      {opencheckin && (
        <div className="checkin-container">
          <div className="button-contain">
            {["Dates", "Months", "Felixible"].map((Option) => (
              <button
                key={Option}
                className={`toggle-option ${
                  activeOption === Option ? "Active" : ""
                }`}
                onClick={() => setActiveOption(Option)}
              >
                {Option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Checkin;
