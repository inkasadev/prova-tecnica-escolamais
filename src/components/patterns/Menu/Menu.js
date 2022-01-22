import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
    return (
        <>
            <ul className='menu__list'>
                <Link to={`/`} className='menu__link'>Home</Link>
            </ul>
        </>
    )
}
