import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../axios/axios";

const defaultOrderId = "37480a56-df52-4688-ae45-5af19d98d322";

const queryFn = async ({queryKey}) => {
    const res = await axiosPrivate.get(`StatusResultFront/${queryKey[1]}`)
    console.log(res)
    

    if(!Array.isArray(res?.data?.data)){
      throw new Error("Something went wrong 123")

    }
    return res.data.data
}



const useOrderStatuses = (orderID = defaultOrderId) => {
  return useQuery({
    queryKey: ["order-statuses", orderID],
    queryFn: queryFn,
    select: (data) => {
      console.log("select");
      return data;
    },
    enabled: false,
    retry: 1
 
  });
};

export default useOrderStatuses;
