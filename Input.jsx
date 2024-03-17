import React from 'react'

export default function Input({ type, placeholder, id, value, setData }) {
    function handleInputVal(e) {
        setData(e.target.value)
    }
    return (
        <input type={`${type}`} value={`${value}`} placeholder={`${placeholder}`} id={`${id}`} onChange={handleInputVal} />
    )
}