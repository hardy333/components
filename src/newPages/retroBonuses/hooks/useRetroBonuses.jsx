import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../../axios/axios";



const queryFn = async (p) => {
    const {retailerId, vendorId} = p.queryKey[1]
    const res = await axiosPrivate.get(`RBFront/${retailerId}/${vendorId}`)
    return res.data
}





const useRetroBonuses = ({retailerId, vendorId}) => {
  
  return useQuery({
    queryKey: ["retro-bonuses", {retailerId, vendorId}],
    queryFn: queryFn,
    select: (data) => {
      return data.data
    },
    enabled: Boolean(retailerId && vendorId)
  });
};

export default useRetroBonuses;