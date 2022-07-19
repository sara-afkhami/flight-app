import React from 'react'
import TicketPrice from './TicketPrice'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const TicketPrices = () => {
  return (
    <div className="ticket-price-container">
      <MDBRow className='ticket-price-row'>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        {/* </div> */}
        {/* <div className='ticket-price-row'> */}
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        {/* </div> */}
        {/* <div className='ticket-price-row'> */}
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
        <MDBCol xl="3" lg="4" md="6"><TicketPrice /></MDBCol>
      </MDBRow>
    </div>
  )
}

export default TicketPrices