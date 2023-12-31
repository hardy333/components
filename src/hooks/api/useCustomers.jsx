import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../axios/axios";


const queryFn = async () => {
    const res = await axiosPrivate.get(`AccountDataFront`)
    return res.data
}




// customerFilerValue - "all", "vendors", "retailers"
const useCustomers = ({ customerFilerValue}) => {
  return useQuery({
    queryKey: ["customers", customerFilerValue],
    queryFn: queryFn,
    select: (data) => {
      if(customerFilerValue === "all"){
        return data.data
      }else if(customerFilerValue === "vendors"){
        return data.data.filter(customer => customer.isVendor)
      }else if(customerFilerValue === "retailers"){
        return data.data.filter(customer => customer.isRetail)
      }
     

      return data.data
    },
  });
};

export default useCustomers;