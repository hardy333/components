import { useQuery } from '@tanstack/react-query'
import { axiosPrivate } from '../../axios/axios'

const queryFn = async () => {
    const res = await axiosPrivate.get(`CatalogueFront/R00002/50ebadf9-8851-11e4-8f6e-b083fec0b293`)
    return res.data
}



const useCatalogue = () => {
    return useQuery({
        queryKey: ["catalogue"],
        queryFn: queryFn,
        select: (data) => {
          return data.data
        },
      });
}


export default useCatalogue