import {useState} from 'react'
import React from 'react'
import {StyledEditButton} from './editButton.styles'
import {crudProcesses} from '../../backend/controller/crudProcesses'
import EditIcon from '../edit-icon/editIcon'

export default function EditButton ({onClick}) {



    return (    
        <StyledEditButton className='editButton' onClick={onClick}>
            <EditIcon />
        </StyledEditButton>
    )
}