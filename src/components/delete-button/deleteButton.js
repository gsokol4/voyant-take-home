import {useState} from 'react'
import React from 'react'
import {StyledDeleteButton} from './deleteButton.styles'
import {crudProcesses} from '../../backend/controller/crudProcesses'

export default function DeleteButton ({id, setItems}) {

    function handleClick(){
        crudProcesses.deleteObject(id)
        setItems([...crudProcesses.getAll()])
    }

    return (    
        <StyledDeleteButton className='deleteButton' onClick={() => {handleClick()}}>
        </StyledDeleteButton>
    )
}