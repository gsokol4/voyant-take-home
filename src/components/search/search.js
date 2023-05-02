import {useState} from 'react'
import React from 'react'
import {StyledSearch} from './search.styles'
import {crudProcesses} from '../../backend/controller/crudProcesses'
import AddForm from '../add-form/addForm'

export default function Search ({setItems}) {

    const [query, setQuery] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        console.log(query)
        setItems(crudProcesses.searchAll(query))
    }
    function reset () {
        setItems(crudProcesses.getAll())
    }

    return (
        <StyledSearch>
            <h1 className='search_title'>Find a doggo</h1>
            <form className='search_form' onSubmit = {handleSubmit}>
                <input
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
                />
                <button aria-label='Submit Search'>Find Puppers</button>
                <button onClick={() => reset()} aria-label='reset'>Show All</button>
            </form>
        </StyledSearch>
    )
}