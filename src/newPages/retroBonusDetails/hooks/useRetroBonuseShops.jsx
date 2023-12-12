import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../../axios/axios";



const queryFn = async (p) => {

    const res = await axiosPrivate.get(`RBFront/${retailerId}/${vendorId}`)
    return res.data
}


const useRetroBonuseShops = () => {
    return useQuery({
        queryKey: ["retro-bonuse-shops"],
        queryFn: queryFn,
        select: (data) => {
          return data.data
        },
      });
 
}

export default useRetroBonuseShops