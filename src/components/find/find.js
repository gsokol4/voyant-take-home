import {useState, createContext} from 'react'
import React from 'react'
import {StyledFind} from './find.styles'
import {crudProcesses} from '../../backend/controller/crudProcesses'
import Search from '../search/search'
import List from '../list/list'

const QueryContext = createContext("")

export default function Find () {
    const [items, setItems] = useState(crudProcesses.getAll());
    const [query, setQuery] = useState("");

    return (
        <QueryContext.Provider value={query}>
            <StyledFind>
                <Search query={query} setQuery={setQuery} setItems={setItems}/>
                <List items={items} setItems={setItems}/>
            </StyledFind>
        </QueryContext.Provider>
    )
}

export {QueryContext}