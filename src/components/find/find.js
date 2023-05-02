import {useState} from 'react'
import React from 'react'
import {StyledFind} from './find.styles'
import {crudProcesses} from '../../backend/controller/crudProcesses'
import Search from '../search/search'
import List from '../list/list'

export default function Find () {

    const [items, setItems] = useState(crudProcesses.getAll());
    console.log(`here are all the items in find ${items}`)

    function handleSubmit(){
        console.log(items)
    }

    return (
        <StyledFind onClick={() => handleSubmit()}>
            <Search setItems={setItems}/>
            <List items={items} setItems={setItems}/>
        </StyledFind>
    )
}