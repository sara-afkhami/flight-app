import React, { useState } from 'react'
import SelectBox from "../AirplaneTab/SelectBox/SelectBox"
import searchIcon from '../../assets/icons/Search.svg'
import calenderIcon from '../../assets/icons/calender.svg'
import FromDropDown from '../AirplaneTab/FromDropDown'
import Passengers from '../AirplaneTab/Passengers'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import FromDate from '../AirplaneTab/FromDate'
import ToDate from '../AirplaneTab/ToDate'

const Tab1 = () => {
    // const returni = `${calenderIcon}Reyurn`
    const [isReturnTrue, setIsReturnTrue] = useState(false);
    return (
        <div>
            <MDBRow className="tab1-selectbox-div">
                <MDBCol md="2">
                    <SelectBox />
                </MDBCol>
                <MDBCol md="4"><Passengers /></MDBCol>
            </MDBRow>
            <MDBRow className='tab1-input-div'>
                <MDBCol lg="2" md="6">
                    <FromDropDown placeholder="From" />
                </MDBCol>
                <MDBCol lg="2" md="6">
                    <FromDropDown placeholder='To' />
                </MDBCol>
                <MDBCol lg="2" md="6">
                    <FromDate placeholder="Depart" isReturnTrue={isReturnTrue} setIsReturnTrue={setIsReturnTrue}/>
                </MDBCol>
                <MDBCol lg="2" md="6">
                    {/* <input placeholder="&#xF073; Return" disabled /> */}
                    <ToDate placeholder="Return" isReturnTrue={isReturnTrue} setIsReturnTrue={setIsReturnTrue}/>
                </MDBCol>
                <MDBCol lg="1">
                    <button><img alt='' src={searchIcon} /></button>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Tab1