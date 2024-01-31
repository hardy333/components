import { useState } from "react";
import VendorsSelectMenu from "../components/vendorsSelectMenu/VendorsSelectMenu";

const Test = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  console.log(selectedCustomer);

  return (
    <div>
      <h1>Test</h1>
      <div style={{
        // width: "180px",
        border: "2px solid red",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 10

      }}>
        <VendorsSelectMenu
          selectedCustomer={selectedCustomer}
          setSelectedCustomer={setSelectedCustomer}
        />
      </div>
    </div>
  );
};

export default Test;
