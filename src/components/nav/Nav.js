import React from 'react'

import {StyledNav} from './Nav.styles'
import Logo from '../logo/Logo.js'

export default function Nav () {
    return (
        <StyledNav>
            <a href='https://englishspeechgym.com' className='homeLink'>
                <Logo />
                <h1>English Speech Gym</h1>
            </a>
            <section>Complete English Language Course</section>
            <button>Preview the course</button>
        </StyledNav>
    )
}