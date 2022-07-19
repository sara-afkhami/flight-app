import React, { useState } from 'react'
import cityAirportIcon from '../../assets/icons/locationBlack.svg'
import airportIcon from '../../assets/icons/airport.svg'
import endIcon from '../../assets/icons/end.svg'

const FromDropDown = (props) => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState("")
    let fromAirport = []
    const handleBlur=()=>{
        
            setTimeout(() => {
                console.log("value" + value)
                // setValue(value);
                setActive(false)
            }, 100)

    }
    const handleClick = () => {
        setActive(!active);
    }
    const obj = [
        { cityName: "Tehran", cityAirports: ["Imam Khomeini", "Mehr Abad"] },
        { cityName: "Isfahan", cityAirports: ["Isfahan Airport"] }

    ]

    for (let i = 0; i < obj.length; i++) {
        fromAirport.push(
            <li onClick={(e) => {
                setValue(e.currentTarget.id)
                console.log("hew" + e.currentTarget.id)
            }} id={obj[i].cityName} >
                <img alt='' src={cityAirportIcon} />
                <div>
                    <b>{obj[i].cityName}</b>
                    <p>all airports</p>
                </div>
            </li>
        )
        const airports = obj[i].cityAirports.map((airport) =>
            <li onClick={(e) => {
                setValue(e.currentTarget.id)
                console.log("some" + e.currentTarget.id)
            }} id={airport}>
                <img alt='' src={endIcon} />
                <img alt='' src={airportIcon} />
                {airport}
            </li>
        )
        const ulAirports = <ul>{airports}</ul>
        fromAirport.push(ulAirports);
    }

    return (
        <div>
            <div className='from-airport'>

                <input placeholder={props.placeholder} onClick={handleClick} onChange={() => setValue(value)} value={value} onBlur={handleBlur} />
                {active ? (
                    <div className='from-drop-down' style={{ backgroundColor: "white", boxShadow: "0px 2px 15px #9D9D9D" }}>
                        <ul>
                            {fromAirport}
                        </ul>
                    </div>
                ) : (<></>)}

            </div>
        </div>
    )
}

export default FromDropDown