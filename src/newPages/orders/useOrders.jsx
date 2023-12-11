import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosPrivate } from '../../axios/axios'

const queryFn = async () => {
    const res = await axiosPrivate.get(`RetailOrdersByAccountFront/R00001`)
    return res.data
}


const useOrders = () => {
    return useQuery({
        queryKey: ["orders"],
        queryFn: queryFn,
        select: (data) => {
          return data.data
        },
      });
}


export default useOrders