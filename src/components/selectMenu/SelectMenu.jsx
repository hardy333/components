import Select, { components } from "react-select";
const options1 = [
  { value: "chocolate1", label: "Chocolate" },
  { value: "strawberry1", label: "Strawberry" },
  { value: "vanilla1", label: "Vanilla" },
  { value: "chocolate2", label: "Chocolate" },
  { value: "strawberry2", label: "Strawberry" },
  { value: "vanilla2", label: "Vanilla" },
  { value: "chocolate3", label: "Chocolate" },
  { value: "strawberry3", label: "Strawberry" },
  { value: "vanilla3", label: "Vanilla" },
  { value: "chocolate4", label: "Chocolate" },
  { value: "strawberry4", label: "Strawberry" },
  { value: "vanilla4", label: "Vanilla" },
];

import "./styled-react-select.css";

const SelectMenu = ({
  options = options1,
  isLoading = true,
  selectedMenuOption,
  setSelectedMenuOption,
  Icon = null,
}) => {
  const handleMenuChange = (e) => {
    setSelectedMenuOption(e);
  };

  console.log(Icon)

  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <span
          className="marlin-select-icon-span"
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          {Icon ? <Icon /> : null}
          {/*  */}
        </span>
        {children}
      </components.Control>
    );
  };

  return (
    <>
      <Select
        isLoading={isLoading}
        placeholder=""
        classNamePrefix="marlin-select"
        className="marlin-select"
        components={{ Control }}
        options={options}
        defaultMenuIsOpen={false}
        value={selectedMenuOption}
        onChange={handleMenuChange}
      />
    </>
  );
};

export default SelectMenu;
