import React from 'react'
import useOrderStatuses from '../../hooks/api/useOrderStatuses';
import AsyncMenu from '../asyncMenu/AsyncMenu';

const RetroBonusConditionsMenu = ({ orderID}) => {
    const { refetch, data, isLoading, isError } =
    useOrderStatuses(orderID);
    
  return (
    <AsyncMenu  labelText={"Hello"} menuColor={"#6e0ff5"} isLoading={isLoading} data={data} isError={isError} refetch={refetch} />

  )
}

export default RetroBonusConditionsMenu