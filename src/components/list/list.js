import React from 'react'
import {useState} from 'react'
import {StyledList} from './list.styles.js'
import Card from '../card/card.js'

export default function List ({items, setItems}) {
    let [mode, setMode] = useState(false)

    function updateMode(){
        setMode(!mode)
    }

    return (
        <StyledList>
            {items.length >= 1 && items.map((obj, index) => {
                return(
                <>
                    <Card obj={obj} index={index} setItems={setItems}/>
                </>
                )
            })}
            {items.length < 1 && <p>No items were found matching this search</p>}
        </StyledList>
    )
}