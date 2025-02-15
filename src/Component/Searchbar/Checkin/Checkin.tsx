import { useState } from "react";

const Checkin = () => {
  const [opencheckin, setOpenCheckin] = useState(false);
  return (
    <div
      className="checkin_section active_box"
      onClick={() => setOpenCheckin(true)}
    >
      <div className="checkin_title">Check in</div>
      <input className="checkin_date subtitle_color" placeholder="Add dates" />

      {opencheckin && (
        <div className="checkin-container">
          <button className="toggle-option active">Dates</button>
          <button className="toggle-option">Months</button>
          <button className="toggle-option">Flexible</button>
        </div>
      )}
    </div>
  );
};
export default Checkin;
