import React, { useEffect, useRef } from 'react'

const useRenderCount = () => {
    const renderCountRef = useRef(1)

    useEffect(() => {
        renderCountRef.current++
        
    })
    

    return renderCountRef.current

}

export default useRenderCount