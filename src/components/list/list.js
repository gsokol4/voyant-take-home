import React from 'react'
import {StyledList} from './list.styles'
import DeleteButton from '../delete-button/deleteButton'
import {crudProcesses} from '../../backend/controller/crudProcesses'

export default function List ({items, setItems}) {
    console.log(setItems)
    return (
        <StyledList>
            {items.length >= 1 && items.map((obj, index) => {
                return(
                <div className='card_body' key={`${obj.name}${index}`}>
                    <DeleteButton id={obj.id} setItems={setItems}/>
                    <h4>{obj.name}</h4>
                    <h4>Breed: {obj.breed}</h4>
                    <h4>Size: {obj.size}</h4>
                    <h4>Owner: {obj.owner}</h4>
                </div>
                )
            })}
            {items.length < 1 && <p>No items were found matching this search</p>}
        </StyledList>
    )
}