import React from 'react'
import { Logo } from '../../atoms/Logo'
import { Menu } from '../Menu/Menu'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Logo />
            <Menu />
        </nav>
    )
}
