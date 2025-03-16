import {useEffect, useRef, useState} from "react";
import moment from "moment";
import DatePicketDropDown from "./DatePicketDropDown.tsx";
import CheckingCheckout from "./CheckingCheckout.tsx";
import When from "./When.tsx";

const DatePickerComponent = () => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [activeOption, setActiveOption] = useState("Dates");

    const checkinRef = useRef<HTMLDivElement>(null);
    const checkoutRef = useRef<HTMLDivElement>(null);
    const whenRef = useRef<HTMLDivElement>(null);

    const dropDownRef = useRef<HTMLDivElement>(null);
    //data picker
    const [startDate, setStartDate] = useState<moment.Moment | null>(null);
    const [endDate, setEndDate] = useState<moment.Moment | null>(null);
    // const [showDatePicker, setShowDatePicker] = useState(true);
    const [dateOptionBtn, setDateOptionBtn] = useState<any>(0);
    const [trueFlexible, setTrueFlexible] = useState(false);
    console.log("openDropDown", openDropDown);
    const handleOptionClick = (option: string) => {
        setActiveOption(option);
        setOpenDropDown(true);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                checkinRef.current &&
                !checkinRef.current.contains(e.target as Node) &&
                checkoutRef.current &&
                !checkoutRef.current.contains(e.target as Node)&&
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target as Node)
                ||
                whenRef.current &&
                !whenRef.current.contains(e.target as Node) &&
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target as Node)
            ) {
                setOpenDropDown(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <>
            {trueFlexible ?
                <When whenRef={whenRef} setOpenDropDown={setOpenDropDown}/>
                :
                <CheckingCheckout
                    checkinRef={checkinRef}
                    checkoutRef={checkoutRef}
                    setOpenDropDown={setOpenDropDown}
                    startDate={startDate} endDate={endDate}
                    setStartDate={setStartDate} openDropDown={openDropDown}
                    setEndDate={setEndDate}
                />
            }
            {openDropDown && (
                <DatePicketDropDown
                    dropDownRef={dropDownRef}
                    setTrueFlexible={setTrueFlexible}
                    activeOption={activeOption} handleOptionClick={handleOptionClick}
                    startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}
                    setOpenDropDown={setOpenDropDown}
                    setDateOptionBtn={setDateOptionBtn} dateOptionBtn={dateOptionBtn}
                />
            )}
        </>
    );
};

export default DatePickerComponent;
