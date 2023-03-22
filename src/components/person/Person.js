import React from 'react'
import largePerson from '../../images/person.png'
import { ImageContainer, StyledPerson } from './Person.styles'
function Person () {
    return (
        <>  
            <ImageContainer props = {{alignSelf: 'flex-start'}}>
                < StyledPerson src={largePerson} alt='Teacher' />
            </ImageContainer>
        </>
    )
}

export { Person }