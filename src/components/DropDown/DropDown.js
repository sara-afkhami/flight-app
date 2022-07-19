import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./DropDown.css";
import icon from "../../assets/icons/airport.svg"

const App = () => {
  const [value, setValue] = useState("");
  // const [multipleValues, setMultipleValues] = useState([]);
  const options = [
    {
      name: "Annie Cruz",
      value: "annie.cruz",
      photo: icon
    },
    {
      name: "Eli Shelton",
      value: "eli.shelton",
      photo: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      name: "Loretta Rogers",
      value: "loretta.rogers",
      photo: "https://randomuser.me/api/portraits/women/51.jpg"
    },
    {
      name: "Lloyd Fisher",
      value: "lloyd.fisher",
      photo: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
      name: "Tiffany Gonzales",
      value: "tiffany.gonzales",
      photo: "https://randomuser.me/api/portraits/women/71.jpg"
    }
  ];
  return (
    <div className="">
      <div style={{ margin: "0 auto", width: 300 }}>
        <SelectSearch
          options={options}
          value={value}
          onChange={setValue}
          search
          filterOptions={fuzzySearch}
          placeholder="From"
        />
      </div>
    </div>
  );
};
export default App;
