import React, { useState } from 'react';
import Tabs from "./tabs";
import Header from './Header';
import Flights from './Flights';
import TicketPrices from './TicketPrices';
import PopularRoutesSection from './PopularRoutesSection';
import Footer from './Footer';
import planeImage from '../assets/img/plane.png'
// import Date from './AirplaneTab/Date';
import Menu from './Menu';
import hotelIcon from '../assets/icons/bedroom.svg'
import planeIcon from '../assets/icons/plane.svg'
import acommodationIcon from '../assets/icons/residence.svg'
import trainIcon from '../assets/icons/train.svg'
import Slider1 from './Slider1'
import DropDown from './DropDown/DropDown'

const items = [
    {
        id: "icon  Flight",
        label: " Flight",
        icon: planeIcon,
        content: "The quick brown fox"
    },
    {
        id: "icon Hotel",
        label: " Hotel",
        icon: hotelIcon,
        content: "Jumps over the lazy dog"
    },
    {

        label: " Accommodation",
        icon: acommodationIcon,
        content: "Jumps over the lazy dog"
    },
    {
        label: " Train",
        icon: trainIcon,
        content: "Jumps over the lazy dog"
    }
];

const Dashboard = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [showTickets, setShowTickets] = useState(false)
    console.log("showww-->" + showTickets)
    return (
        <>
            <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <div><img className='header-image' alt='' src={planeImage} /></div>
            <Tabs items={items} />
            <Flights showTickets={showTickets} setShowTickets={setShowTickets} />
            {showTickets ? (<TicketPrices />) : (<></>)}
            <PopularRoutesSection />
            <Footer />
            {/* <DropDown />
            <p>hi</p> */}
            {/* <Date /> */}
        </>
    )
}

export default Dashboard

