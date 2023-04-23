import React from 'react'

import {StyledNav} from './nav.styles'
import Logo from '../logo/logo.js'

export default function Nav () {
    return (
        <StyledNav>
            <a href='https://www.planwithvoyant.com/' className='homeLink'>
                <Logo />
                <h1>The Doggos of Voyant</h1>
            </a>
            <section>puppers</section>
            <button>delete</button>
        </StyledNav>
    )
}