import React from "react";

import { List } from "./styles";

export default function Tab({ label, active, icon, onClick }) {
  return (
    <List className={active ? "active tab-item" : "notActive tab-item"}>
      <button className="tab-btn" onClick={onClick}>{active ? <img style={{paddingRight:"5px"}} alt="" src={icon} /> : (<img style={{paddingRight:"5px"}} alt="" src={icon} /> )}<p className="tab-label" style={{margin:"0"}}>{label}</p></button>
    </List>
  );
}
