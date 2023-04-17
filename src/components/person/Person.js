import React from 'react'
import largePerson from '../../images/person.png'
import { ImageContainer, StyledPerson } from './Person.styles'
function Person () {
    return (
        <>  
            <ImageContainer alignSelf = {'flex-end'}>
                < StyledPerson src={largePerson} alt='Teacher' />
            </ImageContainer>
        </>
    )
}

export { Person }