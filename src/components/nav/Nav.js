import React from 'react'
import {StyledNav} from './nav.styles'
import Logo from '../logo/logo.js'
import { Link } from "gatsby"

export default function Nav () {
    return (
        <StyledNav>
            <a href='/' className='homeLink'>
                <Logo />
            </a>
            <Link className='nav__home-link' to='/'>
                <h1>The Doggos of Voyant</h1>
                <section>puppers at work</section>
            </Link>
            
            <Link to='/addDogPage'>
                <button className='nav__button'>
                    Add A Dog Page
                </button>
            </Link>
        </StyledNav>
    )
}