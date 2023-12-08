import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../axios/axios";

// RBFront/accountID/SupplierID

const queryFn = async (p) => {
    const {retailerId, vendorId} = p.queryKey[1]
    const res = await axiosPrivate.get(`RBFront/${retailerId}/${vendorId}`)
    console.log("!!! in Query Function !!!")
    
    // const res = await axiosPrivate.get(`RBFront/${"R00001"}/${"D00002"}`)
    return res.data
}





const useRetroBonuses = ({retailerId, vendorId}) => {
  return useQuery({
    queryKey: ["retro-bonuses", {retailerId, vendorId}],
    // queryKey: ["retro-bonuses", "ssss", "hdhjd-dkjd"],
    queryFn: queryFn,
    select: (data) => {
        console.log("Select")
      return data.data
    },
    enabled: Boolean(retailerId && vendorId)
  });
};

export default useRetroBonuses;