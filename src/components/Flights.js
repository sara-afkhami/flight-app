import React from 'react'
import FlightCard from './FlightCard'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Flights = ({ showTickets, setShowTickets }) => {
    return (
        <div className='flight-container'>
            {/* <div > */}
            <MDBRow className='from-to-row'>
                {/* <div > */}
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Dubai"} to={"Tehran"} /></MDBCol>
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Tehran"} to={"Baghdad"} /></MDBCol>
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Isfahan"} to={"Tehran"} /></MDBCol>
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Isfahan"} to={"Tehran"} /></MDBCol>
                {/* </div> */}
                {/* <div className='from-to-row'> */}
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Dubai"} to={"Tehran"} /></MDBCol>
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Tehran"} to={"Baghdad"} /></MDBCol>
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Isfahan"} to={"Tehran"} /></MDBCol>
                <MDBCol lg="3" md="6" className='flight-card'><FlightCard showTickets={showTickets} setShowTickets={setShowTickets} from={"Isfahan"} to={"Tehran"} /></MDBCol>
                {/* </div> */}
            </MDBRow>
            {/* </div> */}
        </div>
    )
}

export default Flights