import React from 'react'
import styles from '../../styles/Home.module.css'
 
export default function Btn({name, title , styleProp}) {
  return (
    <>
    <button  className={styles.btn} style={styleProp}>
        {title}
    </button>
    </>
  )
}
