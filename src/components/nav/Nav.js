import React from 'react'
import {StyledNav} from './nav.styles'
import Logo from '../logo/logo.js'
import {crudProcesses} from '../../backend/controller/crudProcesses'
import { Link } from "gatsby"

export default function Nav () {
    return (
        <StyledNav>
            <a href='https://www.planwithvoyant.com/' className='homeLink'>
                <Logo />
            </a>
            <Link to='/'>
                <h1>The Doggos of Voyant</h1>
                <section>puppers</section>
            </Link>
            
            <Link to='/addDogPage'>
                <button>Add a Dog</button>
            </Link>
        </StyledNav>
    )
}