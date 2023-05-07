import React from 'react'
import {StyledEditButton} from './editButton.styles'
import EditIcon from '../edit-icon/editIcon.js'

export default function EditButton ({onClick}) {

    return (    
        <StyledEditButton className='editButton' onClick={onClick}>
            <EditIcon />
        </StyledEditButton>
    )
}