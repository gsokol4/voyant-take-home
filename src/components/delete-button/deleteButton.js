import {useContext} from 'react'
import React from 'react'
import {StyledDeleteButton} from './deleteButton.styles'
import {crudProcesses} from '../../backend/controller/crudProcesses'
import {QueryContext} from '../find/find'


export default function DeleteButton ({id, setItems}) {

    let query = useContext(QueryContext)
    function handleClick(){
        crudProcesses.deleteObject(id)
        setItems([...crudProcesses.searchAll(query)])

        /*
            using get all here causes the search to be reset after deleting we can fix this by passing query to this component
            and then using searchAll(query) it is best to pass it through something like useContext()
        */
    }

    return (    
        <StyledDeleteButton className='deleteButton' onClick={() => {handleClick()}}>
        </StyledDeleteButton>
    )
}