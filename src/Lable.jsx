import React from 'react'

export default function Lable({ lableName, htmlFor }) {
    return (
        <label htmlFor={`${htmlFor}`}>{lableName}</label>
    )
}
