import React from 'react'
import fromToIcon from '../assets/icons/fromTo.svg'
import blueLocation from '../assets/icons/locationBlue.svg'
import whiteLocation from '../assets/icons/locationWhite.svg'

const FlightCard = ({ from, to, showTickets, setShowTickets }) => {
    return (
        <div onClick={() => setShowTickets(!showTickets)} className='from-to-border'>
            <div className='from-to-card'>
                <div className='from-to'>
                    <img alt='' src={blueLocation} />
                    <p>{from}</p>
                </div>
                <img alt='' src={fromToIcon} />
                <div className='from-to'>
                    <img alt='' src={whiteLocation} />
                    <p style={{ color: "white" }}>{to}</p>
                </div>
            </div>
        </div>
    )
}

export default FlightCard