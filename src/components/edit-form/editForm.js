import {useState} from 'react'
import React from 'react'
import {StyledEditForm} from './editForm.styles'
import { crudProcesses } from '../../backend/controller/crudProcesses'

export default function EditForm ({data, setItems, setMode}) {
    let [formData, updateFormData] = useState(
        {
            name: `${data.name}`,
            breed: `${data.breed}`,
            owner: `${data.owner}`,
            size: `${data.size}`,
            description: `${data.description}`,
            id: `${data.id}`
        }
    )
    

    function handleSubmit(e){
        e.preventDefault()
        crudProcesses.editObject(data.id, formData)
        setItems([...crudProcesses.getAll()])
        setMode(!true)
    }

    return (    
        <StyledEditForm>
            <h1 className='edit_form__title'>Edit {formData.name}</h1>
            <form className='edit_form__form' onSubmit = {handleSubmit}>
                <label className='edit_form__label' aria-label='dog name label' > Dog's Name
                    <input
                    type="text" 
                    value={formData.name}
                    onChange={(e) => updateFormData({ ...formData, name: e.target.value})}
                    aria-label="Dog name input box"
                    />
                </label>

                <label className='edit_form__label' aria-label='dog name label' > Dog's Breed
                    <input
                    type="text" 
                    value={formData.breed}
                    onChange={(e) => updateFormData({ ...formData, breed: e.target.value})}
                    aria-label="Dog breed input box"
                    />
                </label>

                <label className='edit_form__label' aria-label='owner name label' > Owner's Name
                    <input
                    type="text" 
                    value={formData.owner}
                    onChange={(e) => updateFormData({ ...formData, owner: e.target.value})}
                    aria-label="input box for the name of the owner of the dog"
                    />
                </label>

                <label className='edit_form__label' aria-label='description of dog label' > Dog Size
                    <select 
                    name="selectList"
                    value={formData.size}
                    onChange={(e) => updateFormData({ ...formData, size: e.target.value})} 
                    >
                        <option value="XS" >Very Small</option>
                        <option value="SM" >Small</option>
                        <option value="MD">Medium</option>
                        <option value="LG">Large</option>
                    </select>
                </label>

                <label className='edit_form__label' aria-label='description of dog label' > Tell us more about your dog
                    <textarea 
                    name="subject"
                    value={formData.description}
                    onChange={(e) => updateFormData({ ...formData, description: e.target.value})}
                    aria-label="input box for the description the dog"
                    placeholder="tell us more about your dog..."></textarea>
                </label>
                <button aria-label='Update Info'>Update Info</button>
            </form>
        </StyledEditForm>
    )
}