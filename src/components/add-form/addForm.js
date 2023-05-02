import {useState} from 'react'
import React from 'react'
import {StyledAddForm} from './addForm.styles'
import { crudProcesses } from '../../backend/controller/crudProcesses'

export default function AddForm () {
    let [formData, updateFormData] = useState(
        {
            name: "",
            breed: "",
            owner: "",
            size: "LG",
            description: "",
            id: ""
          }
    )
    

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        crudProcesses.addObject(formData)
        console.log(crudProcesses.getAll())
    }

    return (    
        <StyledAddForm className='addForm' >
            <h1 className='addForm_title'>Add a Dog</h1>
            <form className='addForm_form' onSubmit = {handleSubmit}>
                <label aria-label='dog name label' > Dog's Name
                    <input
                    type="text" 
                    value={formData.name}
                    onChange={(e) => updateFormData({ ...formData, name: e.target.value})}
                    aria-label="Dog name input box"
                    />
                </label>

                <label aria-label='dog name label' > Dog's Breed
                    <input
                    type="text" 
                    value={formData.breed}
                    onChange={(e) => updateFormData({ ...formData, breed: e.target.value})}
                    aria-label="Dog breed input box"
                    />
                </label>

                <label aria-label='owner name label' > Owner's Name
                    <input
                    type="text" 
                    value={formData.owner}
                    onChange={(e) => updateFormData({ ...formData, owner: e.target.value})}
                    aria-label="input box for the name of the owner of the dog"
                    />
                </label>

                <label aria-label='description of dog label' > Dog Size
                    <select 
                    name="selectList"
                    value={formData.size}
                    onChange={(e) => updateFormData({ ...formData, size: e.target.value})} 
                    >
                        <option value="XS" selected >Very Small</option>
                        <option value="SM" selected >Small</option>
                        <option value="MD">Medium</option>
                        <option value="LG">Large</option>
                    </select>
                </label>

                <label aria-label='description of dog label' > Tell us more about your dog
                    <textarea 
                    name="subject"
                    value={formData.description}
                    onChange={(e) => updateFormData({ ...formData, description: e.target.value})}
                    aria-label="input box for the description the dog"
                    placeholder="tell us more about your dog..."></textarea>
                </label>
                <button aria-label='Submit add a dog form'>Add Dog</button>
            </form>
        </StyledAddForm>
    )
}