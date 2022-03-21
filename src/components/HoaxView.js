import React from 'react'

export default function HoaxView(props) {
    const { hoax } = props;
    return (
        <div className='card p-1'>{hoax.content}</div>
    )
}
