import React from 'react'
import cancelIcon from "../assets/icons/cancel.svg"

const MenuInfo = () => {
    return (
        <div>
            <div className='row-menu'>
                <div className='row-menu-header'>Profile</div>
                <div className='row-menu-info'>
                    <div>Jannat Alnajaf </div>
                    <div>Agency Code: <b>1234</b></div>
                </div>
            </div>
            <div className='row-menu'>
                <div className='row-menu-header'>User</div>
                <div className='row-menu-info'>
                    <div>Elahe Davari</div>
                </div>

            </div>
        </div>
    )
}

const CreditInfo = () => {
    return (
        <div className='row-menu-credit-card'>
            <div className='credit-column-info'>
                <div className='credit-column-info-row'>
                    <b>Available Credit</b>
                    <p>2,320,546,210 IRR</p>
                </div>
                <div className='credit-column-info-row'>
                    <b>Cash Balance</b>
                    <p>5,444,562,100 IRR</p>
                </div>
                <div className='credit-column-info-row'>
                    <b>Total</b>
                    <p>7,765,108,310 IRR</p>
                </div>
            </div>
            <div className='credit-column-name'>
                <b>
                    AGENCY<br/> CREDIT
                </b>
            </div>
        </div>
    )
}
const MenuButtons=() =>{
    return(
        <div className='menu-buttons'>
            <button className='menu-button'>Dashboard</button>
            <button className='menu-button'>Logout</button>
        </div>
    )
}

const Menu = ({ menuIsOpen, setMenuIsOpen }) => {
    return (
        <div className={menuIsOpen ? "show-menu" : "hide-menu"}>
            <button onClick={() => setMenuIsOpen(false)}><img alt='' src={cancelIcon} /></button>
            <div className='menu-content'>
            <MenuInfo />
            <CreditInfo />
            <MenuButtons/>
            </div>
        </div>
    )
}

export default Menu