import React from 'react'
import styles from './../../styles/Input.module.css'
import ButtonCh2 from './../button/index'

export default function Input({ name, type = 'text', placeholder = '', title = '', buttonType }) {
    switch (type) {
        case 'text':
            return <input placeholder={placeholder} name={name} type={type} className={styles.input_ch2} />
        case 'textarea':
            return <textarea name={name} id="" cols="30" rows="10" placeholder={placeholder}></textarea>
        case 'uploadFile':
            return <input type="file" id="myfile" name="myfile" />
        case 'button':
            return <ButtonCh2 name={name} title={title} buttonType={'submit'} />
        default:
            break;
    }
}
