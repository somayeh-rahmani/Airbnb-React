import DatePicker from "./DatePicker.tsx";
import DateOptionBtn from "./DateOption.tsx";
import date from "/src/asset/icon/date.svg";

// @ts-ignore
const DatePicketDropDown = ({dropDownRef,activeOption,setTrueFlexible,setOpenDropDown,handleOptionClick,startDate,endDate,setStartDate,setEndDate,setDateOptionBtn,dateOptionBtn,}) => {
    return (
        <div className="checkin-container" ref={dropDownRef}>
            <div className="button-contain">
                {["Dates", "Flexible"].map((Option) => (
                    <button
                        key={Option}
                        className={`toggle-option ${
                            activeOption === Option ? "active" : ""
                        }`}
                        onClick={() => {
                            if (Option === "Flexible") {
                                setTrueFlexible(true)
                            } else {
                                setTrueFlexible(false)
                            }
                            handleOptionClick(Option)
                        }}
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
                                    <img src={date}/>
                                    <span>{month} 2025</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicketDropDown;