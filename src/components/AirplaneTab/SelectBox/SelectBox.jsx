import { useState } from "react";
import "./styles.css";
import arrow from '../../../assets/icons/wave_arrow_right.svg'

export default function SelectBox() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsActive(false)
      console.log("hi")
  }

  }
  return (
    <div>
      <div className="dropdown">
        <div
        // contentEditable
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          onBlur={() => handleBlur()}
          className="dropdown-btn"
        >
          {selected}
          <span
            className={isActive ? "arrow-up" : "arrow-down"}
          ><img alt="" src={arrow} /></span>
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            Oneway
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Roundtrip
          </div>
        </div>
      </div>
    </div>
  );
}
