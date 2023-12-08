import React from 'react'
import styles from "./loadingSpinner.module.css"



const LoadingSpinner = ({color, size}) => {
  
  
  return (
    <div className={`${styles.loadingSpinner} ${styles[size]}`} style={{borderColor: color}} ></div>
  )
}

export default LoadingSpinner