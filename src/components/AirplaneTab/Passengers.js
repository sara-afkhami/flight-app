import { useState, useEffect } from "react";
import arrow from '../../assets/icons/wave_arrow_right.svg'
import PassengerItem from "./PassengerItem";
import  Radio  from "./TripType/Radio";

const Passengers = () => {
    const [showdropdown, setShowdropdown] = useState(false)
    const [adultPassenger, setAdultPassenger] = useState(0)
    const [childPassenger, setChildPassenger] = useState(0)
    const [infantPassenger, setInfantPassenger] = useState(0)
    const [allPassengers, setAllPassengers] = useState(0)
    const [selected, setSelected] = useState("Economy");
    const [TripType, setTripType] = useState("Economy");

    const closeSelector = (e) => {
        let dropdownBoxClicked = e.target.closest("#dropdownselect");
        console.log("ssss", dropdownBoxClicked);
        if (!dropdownBoxClicked) {
            setShowdropdown(false);
        }
    }
    useEffect(() => {
        window.addEventListener("click", (e) => closeSelector(e));


        return () => {
            window.removeEventListener("click", (e) => closeSelector(e));
        }
    }, [])




    return (
        <div className="passenger-section">
            <div id="dropdownselect" class="passenger-dropdownselect">
                <div
                    class="dropdownToggler"
                    onClick={() =>
                        setShowdropdown(!showdropdown)
                    }
                >
                    <span>{allPassengers} Passengers , {TripType}</span>
                    <span
                        className={showdropdown ? "arrow-up" : "arrow-down"} style={{ marginLeft: "20px" }}
                    ><img alt="" src={arrow} /></span>
                </div>
                {showdropdown === true && (
                    <div class="passenger-dropdown">
                        <PassengerItem passenger={adultPassenger} passengerType="Adult" setPassenger={setAdultPassenger} allPassengers={allPassengers} setAllPassengers={setAllPassengers} />
                        <PassengerItem passenger={childPassenger} passengerType="Child" setPassenger={setChildPassenger} allPassengers={allPassengers} setAllPassengers={setAllPassengers} />
                        <PassengerItem passenger={infantPassenger} passengerType="Infant" setPassenger={setInfantPassenger} allPassengers={allPassengers} setAllPassengers={setAllPassengers} />
                        <Radio
                            value="first"
                            selected={selected}
                            text="Economy"
                            onChange={setSelected}
                            setTripType={setTripType}
                        />
                        <Radio
                            value="second"
                            selected={selected}
                            text="Businass Class"
                            onChange={setSelected}
                            setTripType={setTripType}
                        />
                        <Radio
                            value="third"
                            selected={selected}
                            text="First Class"
                            onChange={setSelected}
                            setTripType={setTripType}
                        />
                    </div>
                )}
            </div>
        </div>
    );

}

export default Passengers;
