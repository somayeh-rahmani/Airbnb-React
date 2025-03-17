import close from "/src/asset/icon/close.svg";

// @ts-ignore
import { MutableRefObject } from "react";
import { Moment } from "moment";

interface CheckingCheckoutProps {
  checkinRef: MutableRefObject<HTMLDivElement | null>;
  checkoutRef: MutableRefObject<HTMLDivElement | null>;
  setOpenDropDown: (state: boolean) => void;
  startDate: Moment | null;
  endDate: Moment | null;
  setStartDate: (date: Moment | null) => void;
  openDropDown: boolean;
  setEndDate: (date: Moment | null) => void;
}

const CheckingCheckout = ({
  checkinRef,
  checkoutRef,
  setOpenDropDown,
  startDate,
  endDate,
  setStartDate,
  openDropDown,
  setEndDate,
}: CheckingCheckoutProps) => {
  return (
    <>
      {/* Checkin section */}
      <div
        className="checkin_section active_box"
        ref={checkinRef}
        onClick={() => {
          setOpenDropDown(!openDropDown);
        }}
      >
        <div className="dates-text">
          <div className="checkin_title">Check in</div>
          <div
            className={`checkin_date subtitle_color ${
              startDate ? "selected-date" : ""
            }`}
            onClick={() => setOpenDropDown(true)}
          >
            {startDate ? startDate.format("MMM DD") : "Add dates"}
          </div>
        </div>
        {openDropDown && startDate && (
          <div
            className="clear_btn"
            onClick={() => {
              setStartDate(null);
            }}
          >
            <img src={close} alt="close-icon" />
          </div>
        )}
      </div>
      <div className="header_divider"></div>
      {/* checkout section */}
      <div
        className="checkout_section active_box"
        ref={checkoutRef}
        onClick={() => {
          setOpenDropDown(!openDropDown);
        }}
      >
        <div className="dates-text">
          <div className="checkout_title">Check out</div>
          <div
            className={`checkout_date subtitle_color ${
              endDate ? "selected-date" : ""
            }`}
            onClick={() => setOpenDropDown(true)}
          >
            {endDate ? endDate.format("MMM DD") : "Add dates"}
          </div>
        </div>
        {openDropDown && endDate && (
          <div
            className="clear_btn"
            onClick={() => {
              setEndDate(null);
            }}
          >
            <img src={close} alt="close-icon" />
          </div>
        )}
      </div>
    </>
  );
};

export default CheckingCheckout;
