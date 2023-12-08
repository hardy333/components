import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../axios/axios";

const defaultOrderId = "37480a56-df52-4688-ae45-5af19d98d322";

const queryFn = async ({queryKey}) => {
    console.log(queryKey)
    const res = await axiosPrivate.get(`StatusResultFront/${queryKey[1]}`)
    return res.data
}

// const x = queryFn().then(y => console.log({y}))
// console.log({x})

const useOrderStatuses = (orderId = defaultOrderId) => {
  return useQuery({
    queryKey: ["order-statuses", orderId],
    queryFn: () => {
      return axiosPrivate.get(`StatusResultFront/${orderId}`).then((res) => {
        return res.data
      });
    },
    // queryFn: queryFn,
    // select: (data) => {
    //   console.log("select");
    //   return data;
    // },
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
};

export default useOrderStatuses;
