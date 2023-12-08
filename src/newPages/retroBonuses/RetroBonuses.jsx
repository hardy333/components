import React, { useEffect, useState } from 'react'
import useRetroBonuses from './useRetroBonuses'
import useCustomers from '../../hooks/api/useCustomers'
import useRenderCount from '../../hooks/useRenderCount'

const RetroBonuses = () => {
    const [retailerId, setRetailerId] = useState("R00001")
    const [vendorId, setVendorId] = useState("D00002")
    const [selectedCustomer, setSelectedCustomer] = useState(null)


    const {data: customers } = useCustomers({customerFilerValue: "vendors"})
    const {data} = useRetroBonuses({retailerId: retailerId, vendorId: selectedCustomer?.accountID})
    
    

    useEffect(() => {
        if(!customers) return
        setSelectedCustomer(customers[1])
    }, [customers])

    useEffect(() => {

        
    }, [data])

    
    const renderCount = useRenderCount()
    const [count, setCount] = useState(0)

    
    
  return (
    <div>RetroBonuses
        <h2>render Count - {renderCount}</h2>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setRetailerId(retailerId === "R00001" ? "R00002" : "R00001")}>Change RetailerId</button>
        <button onClick={() => setVendorId(vendorId === "D00002" ? "D00003" : "D00002")}>change vendorId</button>
    </div>
  )
}

export default RetroBonuses