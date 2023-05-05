import {useState} from 'react'
import React from 'react'
import {StyledSearch} from './search.styles'
import {crudProcesses} from '../../backend/controller/crudProcesses'
import AddForm from '../add-form/addForm'

export default function Search ({query, setQuery, setItems}) {
    function handleSubmit(e){
        e.preventDefault()
        setItems(crudProcesses.searchAll(query))
    }
    function reset () {
        setItems([...crudProcesses.getAll()])
    }

    function random () {
        setItems([crudProcesses.random()])
    }

    function filter (size) {
        setItems([...crudProcesses.searchAll(query).filter((object) => object.size === size)])
    }

    function sortAToZ (query){
        setItems([...(crudProcesses.searchAll(query).sort(
            (a,b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                } else if (b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1
                } else{
                    return 0
                }
            }
        ))])
    }

    return (
        <StyledSearch>
            <h1 className='search__title'>Find a doggo</h1>
            <form className='search__form' onSubmit = {handleSubmit}>
                <input
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
                />
                <button className='search__button' aria-label='Submit Search'>Find Puppers</button>
                
            </form>
            <div className='search__util-buttons'>
                <button className='search__button' onClick={() => reset()} aria-label='reset'>Show All</button>
                <button className='search__button' onClick={() => random()} aria-label='random dog generator'>Random Pupper</button>
                <button className='search__button' onClick={() => filter('LG')} aria-label='filters large dogs'>filter: Large</button>
                <button className='search__button' onClick={() => filter('SM')} aria-label='filters small dogs'>filter: Small</button>
                <button className='search__button' onClick={() => filter('XS')} aria-label='filters large dogs'>filter: XSmall</button>
                <button className='search__button' onClick={() => filter('MD')} aria-label='filters small dogs'>filter: Medium</button>
                <button className='search__button' onClick={() => sortAToZ(query)} aria-label='sort names A-Z'>sort: By Name A-Z</button>
            </div>
        </StyledSearch>
    )
}