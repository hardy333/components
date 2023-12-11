import { useQuery } from '@tanstack/react-query'
import { axiosPrivate } from '../../axios/axios'

const queryFn = async () => {
    const res = await axiosPrivate.get(`INVFront/R00001`)
    return res.data
}

const useInvoiceDetails = () => {
    return useQuery({
        queryKey: ["invoice-details"],
        queryFn: queryFn,
        select: (data) => {
          return data.data
        },
      });
}

export default useInvoiceDetails