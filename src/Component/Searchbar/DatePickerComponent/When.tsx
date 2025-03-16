
// @ts-ignore
const When = ({setOpenDropDown,whenRef}) => {
    return (
        <div ref={whenRef} className="when_section active_box" onClick={() => {
            setOpenDropDown((state: Boolean) => !state);
        }}
        >
            <div className="dates-text">
                <div
                    className="checkin_title"

                >
                    When
                </div>
                <div
                    className={`checkin_date subtitle_color`}
                    onClick={() => setOpenDropDown(true)}
                >
                    "Add Date"
                </div>
            </div>
        </div>
    );
};

export default When;