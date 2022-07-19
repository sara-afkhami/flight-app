import React from 'react'

const PassengerItem = (props) => {
    return (
        <div>
            <div className="passenger-item">
                {props.passengerType}
                <div className="passenger-counter">
                    <button className="counter-item" onClick={() => {
                        if (props.passenger > 0) {
                            props.setPassenger(props.passenger - 1)
                            props.setAllPassengers(props.allPassengers - 1)
                        }
                        else { }
                    }}>
                        &#8722;
                    </button>
                    <span className="counter-item">{props.passenger}</span>
                    <button className="counter-item" onClick={() => {
                        props.setPassenger(props.passenger + 1)
                        props.setAllPassengers(props.allPassengers + 1)
                    }}>
                        &#43;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PassengerItem