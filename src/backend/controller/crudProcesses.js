import model from '../model/model'
import validateObject from './validateObject'

// todo make this class more reusable by moving all type checks into it's own file and and passing them as properties

class CrudProcesses{
    constructor(model, validateObject){
        this.validateObject = validateObject
        this.model = model
    }

    typeCheckModel(){
        if(!Array.isArray(this.model)){throw new Error('Great Scot! The database is no longer an array, how did you do it?')}
        /*
        added type checking, I thought about using typeScript for this project but I felt like it
        would have added time to the project and not been worth the investment for a small repo like this
        typeScript adds a lot of lines of code but really shines in big projects
        I felt a function would be reusable enough.
        */
    }

    makeUniqueId(prop='doggo'){
        return `${prop}${new Date().getTime()}`
    }

    getAll(){
        this.typeCheckModel()
        console.log(this.model)
        return this.model
    }

    addObject(object, prop){
        this.validateObject(object)
        object.id = this.makeUniqueId(prop)
        model.push(object)
    }

    getIndexById(id){
        return this.model.indexOf(model.find(obj => obj.id === id))
    }

    editObject(id, newObject){
        this.validateObject(newObject)
        this.typeCheckModel()

        let index = this.getIndexById(id)
        if(index === -1){
            console.error('the requested id does not exist exist in the array')
        } else {
            model[index] = newObject
        }
        console.log(this.model)
    }

    deleteObject(id){
        this.typeCheckModel()

        const index = this.getIndexById(id)
        if(index === -1){
            console.error('the requested id does not exist exist in the array so the object can not be deleted')
        } else {
            model.splice(index, 1)
            console.log(this.model)
        }
    }

    searchAll(query){
        const filtered = this.model.filter((obj) =>{
            for (const [key, value] of Object.entries(obj)) {
                if(typeof(value)=== 'string' && value.toLocaleLowerCase().includes(query.toLowerCase()))
                {return true}
            }
        })
        console.log(filtered)
        return filtered
    }

}

export const crudProcesses = new CrudProcesses(model, validateObject)