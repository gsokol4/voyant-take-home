import React from 'react'

import { StyledCallToAction } from './CallToAction.styles'

export default function CallToAction () {
    return (
        <StyledCallToAction>
            <h3 className='callToAction__Title'>Learn English at the professional level</h3>
            <a className='callToAction__Link' >
                <button className='callToAction__Button'>Start the Course Now</button>
            </a>
        </StyledCallToAction>
    )
}

// href='https://englishspeechgym.com'