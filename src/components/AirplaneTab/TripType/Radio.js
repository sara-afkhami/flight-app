import React from "react";


const Radio = (props)=> {


    return (
      <div
        className="modern-radio-container"
        onClick={() => {
          props.onChange(props.value);
          props.setTripType(props.text)
        }}
      >
        <div className="helper-text">{props.text}</div>
        <div
          className={`radio-outer-circle ${props.value !== props.selected && "unselected"}`}
        >
          <div
            className={`radio-inner-circle ${props.value !== props.selected &&
              "unselected-circle"}`}
          />
        </div>
        
      </div>
    );
  }


export default Radio
