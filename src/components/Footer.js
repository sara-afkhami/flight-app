import React from 'react'
import location from "../assets/icons/location.svg"
import socialMedia from "../assets/icons/socialMedia.svg"
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p className='footer-item'>Copyright 2020 &#169; Samatsg</p>
            <div className='footer-address footer-item'>
                <img alt='' src={location} />
                <p>
                    IRAQ , Najaf, Eshteraki Zone٫ Share Al Ravan Intersection٫ Hay Al Amir | Info@Samamedi.Com
                </p>
            </div>
            <img className='footer-item' alt='' src={socialMedia}/>
        </div>
    )
}

export default Footer