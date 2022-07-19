import React from 'react'
import ticketMarker from '../assets/img/ticketMarker.svg'
import ticketMarkerHover from '../assets/img/ticketMarkerHover.svg'

const TicketPrice = () => {
    return (
        <div className='ticket-price-card'>
            <div>
                <img className='not-hover' alt='' src={ticketMarker} />
                <img className='hover' alt='' src={ticketMarkerHover} />
                <p className='date-ticket'>17 April</p>
            </div>
            <p><b>20,880,000 </b>IRR</p>
        </div>
    )
}

export default TicketPrice