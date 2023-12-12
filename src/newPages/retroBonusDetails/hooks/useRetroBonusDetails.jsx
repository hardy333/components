import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../../axios/axios";



const queryFn = async (p) => {
    const res = await axiosPrivate.get(`RetroBonusDetsilsFront/3639a8cd-4df3-4f6a-801a-8f1ffce2a055/975fba17-47fd-11ee-8124-005056b5a0aa`)
    return res.data
}

const useRetroBonusDetails = () => {
  return useQuery({
    queryKey: ["retro-bonuse-details"],
    queryFn: queryFn,
    select: (data) => {
      return data.data
    },
  });
}

export default useRetroBonusDetails