import React, { useState } from "react";
import SelectBox from "../AirplaneTab/SelectBox/SelectBox";
import { Lists, ContentStyle } from "./styles";
import Tab1 from "./Tab1"


import Tab from "./Tab";

function Content({ children, active, id }) {
  return (
    <ContentStyle className={active ? "show" : "hidden"}>
      {children}
    </ContentStyle>
  );
}

export default function Tabs({ items }) {
  const [active, setActive] = useState(items[0]);
  return (
    <div className="tab-panel">
      <Lists className="tabs-list">
        {items.map((item) => (
          <>
            <Tab
              label={item.label}
              icon = {item.icon}
              active={active === item}
              onClick={() => setActive(item)}
            />
            <span className="space"></span>
          </>
        ))}
      </Lists>
      <div className="tab--content">
        {/* {items.map((item) => (
          <Content active={active === item}>{item.content}</Content>
        ))} */}

        <div >
          <Content active={active === items[0]}>
            <Tab1/>
          </Content>
        </div>
        <div >
          <Content active={active === items[1]}>bye</Content>
        </div>
      </div>
    </div>
  );
}
