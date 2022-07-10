import React from 'react'
import Input from '../components/input'

export default function Register() {
    const inputList = [
        {
            name: 'first_name',
            placeholder: 'نام'
        },
        {
            name: 'phonenumber',
            placeholder: 'شماره تلفن',
            type: 'text'
        },
        {
            name: 'question',
            placeholder: ' سوال'
        },
        {
            name: 'question',
            placeholder: ' سوال',
            type: 'textarea'
        },
        {
            name: 'question',
            placeholder: ' سوال',
            type: 'uploadFile'
        },
        {
            name: 'request',
            title: 'ارسال درخواست',
            type: 'button'
        }
    ]
    return (
        <div style={{
            minHeight: '100vh',
            height: 'auto',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
                    }}>
            <form style={{ display: 'flex', flexDirection: 'column', padding: '10px' }} >
                {inputList.map(({ name, placeholder, type, title }, key) => ((
                    <div key={key} style={{ marginTop: '10px' }}>
                        <Input   {...{ name, placeholder, type, title }} />
                    </div>
                )))}
            </form>
        </div>
    )
}
