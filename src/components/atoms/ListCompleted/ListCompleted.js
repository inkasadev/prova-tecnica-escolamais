import React from 'react'
import './ListCompleted.css'

export const ListCompleted = ({text}) => {
    return (
        <p className='list-completed'>
            {text}
        </p>
    )
}
