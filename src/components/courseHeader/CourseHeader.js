import React from 'react'

import { StyledCourseHeader, StyledCourseContainer } from './CourseHeader.styles'
import { DecorativeTextBox } from '../decorativeTextBox/DecorativeTextBox.styles'
import { Person } from '../person/Person'

export default function CourseHeader () {
    return (
        <StyledCourseContainer>
            <StyledCourseHeader>
                <section className='text-display'>
                    <h1 className='text-display-header'>Welcome the English Speech Gym Complete English course</h1>
                    <h5 className='text-display-content'>In this actionable course, Native and Professional English Teacher Oli Gardner will walk you through how to reproduce an American accent. Follow along with individual lessons and step-by-step instructional videos to help you develop an American Accent as you go.</h5>
                    <p className='text-display-p'>Coming soon: the English Speech Gym's Certified English accent training program</p>
                    <p className='text-display-p'>Created by English Speech Gym co-founder Oli Gardner</p>
                </section>
                <Person />
            </StyledCourseHeader>
            <DecorativeTextBox />
        </StyledCourseContainer>
    )
}