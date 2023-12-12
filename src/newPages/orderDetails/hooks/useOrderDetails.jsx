import { useQuery } from '@tanstack/react-query'
import { axiosPrivate } from '../../../axios/axios'

const queryFn = async () => {
    const res = await axiosPrivate.get(`OrderDetailsFront/85f62fda-641a-47c7-ab3d-38c8d08b7360`)
    return res.data
}



const useOrderDetails = () => {
    return useQuery({
        queryKey: ["order-details"],
        queryFn: queryFn,
        select: (data) => {
          return data.data
        },
      });
}

export default useOrderDetails