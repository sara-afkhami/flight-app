import React from 'react'
import menuIcon from '../assets/icons/Menu.svg'
import logo from '../assets/icons/logo.svg'

const Header = ({menuIsOpen, setMenuIsOpen}) => {
    return (
        <div className='header-container'>
            <div className='header-brand'>
                {/* <a> */}
                    <img alt='' src={logo} />
                    <span style={{width: "10px"}}></span>
                    <strong>Ofogh Aseman Parsian</strong>
                {/* </a> */}
            </div>
            <div>
                <a href='#' onClick={()=>{setMenuIsOpen(true)}}><img alt='' src={menuIcon} /></a>
            </div>
        </div>
    )
}

export default Header