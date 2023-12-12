import { useQuery } from '@tanstack/react-query'
import { axiosPrivate } from '../../../axios/axios'

const queryFn = async () => {
    const res = await axiosPrivate.get(`INVFront/R00001`)
    return res.data
}



const useInvoices = () => {
    return useQuery({
        queryKey: ["invoices"],
        queryFn: queryFn,
        select: (data) => {
          return data.data
        },
      });
}

export default useInvoices