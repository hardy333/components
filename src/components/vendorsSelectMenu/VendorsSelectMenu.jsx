import SelectMenu from "../selectMenu/SelectMenu";
import useCustomers from "../../hooks/api/useCustomers";
import { useEffect } from "react";
import VendorCardSvg from "./VendorCardSvg";

const VendorsSelectMenu = ({ selectedCustomer, setSelectedCustomer }) => {
  const { data: customers, isLoading: customersIsLoading } = useCustomers({
    customerFilerValue: "vendors",
  });

  useEffect(() => {
    if (!customers) return;
    if(customers?.length === 0) return

    const { name, accountID } = customers[1];
    setSelectedCustomer({ value: name, label: name, customerID: accountID });
  }, [customers]);

  return (
    <SelectMenu
      isLoading={customersIsLoading}
      selectedMenuOption={selectedCustomer}
      setSelectedMenuOption={setSelectedCustomer}
      Icon={VendorCardSvg}
      options={
        customers
          ? customers.map((obj) => ({
              label: obj.name,
              value: obj.name,
              accountID: obj.accountID,
            }))
          : []
      }
    />
  );
};

export default VendorsSelectMenu;
