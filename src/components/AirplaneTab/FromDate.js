
import React,{useState} from 'react'
import DatePicker from "react-multi-date-picker"
import { Calendar, DateObject } from "react-multi-date-picker";


const Date = ({placeholder, setIsReturnTrue}) => {
  const [date, setDate] = useState(" ");
  const [show, setShow] = useState(false);
  date === " " ? setIsReturnTrue(false) : setIsReturnTrue(true);
  return (
    <div style={{ textAlign: "left" }}>
        {/* <input onClick={()=>setShow(!show)} value={date.format()} /> */}
        <DatePicker value={date} onChange={setDate} onClick={()=>{setTimeout(setShow(!show),0)}} numberOfMonths={2} placeholder={placeholder} />
        {/* <button onClick={() => setDate(new DateObject())}>reset</button> */}
      </div>
  )
}

export default Date