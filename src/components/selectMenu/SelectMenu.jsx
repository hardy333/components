import { useState } from "react";
import Select from "react-select";
// const options = [
//     { value: "chocolate1", label: "Chocolate" },
//     { value: "strawberry1", label: "Strawberry" },
//     { value: "vanilla1", label: "Vanilla" },
//     { value: "chocolate2", label: "Chocolate" },
//     { value: "strawberry2", label: "Strawberry" },
//     { value: "vanilla2", label: "Vanilla" },
//     { value: "chocolate3", label: "Chocolate" },
//     { value: "strawberry3", label: "Strawberry" },
//     { value: "vanilla3", label: "Vanilla" },
//     { value: "chocolate4", label: "Chocolate" },
//     { value: "strawberry4", label: "Strawberry" },
//     { value: "vanilla4", label: "Vanilla" },
//   ];

import "./styled-react-select.css";

const SelectMenu = ({ options = [], isLoading = true, selectedMenuOption = null, setSelectedMenuOption }) => {

  const handleMenuChange = (e) => {
    setSelectedMenuOption(e);
  };

  return (
    <>
      <Select
        isLoading={isLoading}
        placeholder=""
        classNamePrefix="marlin-select"
        className="marlin-select marlin-select--size-small"
        options={options}
        defaultMenuIsOpen={false}
        value={selectedMenuOption}
        onChange={handleMenuChange}
      />
    </>
  );
};

export default SelectMenu;
