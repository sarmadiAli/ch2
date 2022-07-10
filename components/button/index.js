import React from 'react'
import styles from '../../styles/Button.module.css'


export default function Button({ name, buttonType = '', title, styleProp }) {
  console.log('title', title)
  return (
    <>
      <button type={buttonType} className={styles.button} style={styleProp}>
        {title}
      </button>
    </>
  )
}
