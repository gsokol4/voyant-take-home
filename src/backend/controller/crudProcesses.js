import model from '../model/model'
import validateObject from './validateObject'

// todo make this class more reusable by moving all type checks into it's own file and and passing them as properties

class CrudProcesses{
    constructor(validateObject){
        this.validateObject = validateObject
    }

    typeCheckModel(){
        if(!Array.isArray(model)){throw new Error('Great Scot! The database is no longer an array, how did you do it?')}
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
        return model
    }

    addObject(object, prop){
        this.validateObject(object)
        object.id = this.makeUniqueId(prop)
        model.push(object)
    }

    getIndexById(id){
        return model.indexOf(model.find(obj => obj.id === id))
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
    }

    deleteObject(id){
        this.typeCheckModel()

        const index = this.getIndexById(id)
        if(index === -1){
            console.error('the requested id does not exist exist in the array so the object can not be deleted')
        } else {
            model.splice(index, 1)
        }
    }

    /*
        not this is not a very effcient search the time complexity is x^(2 )
        I did this as a design desc
        ision since the data base is so small
    */
    searchAll(query){
        const filtered = model.filter((obj) =>{
            for (const [key, value] of Object.entries(obj)) {
                if(typeof(value)=== 'string' && value.toLocaleLowerCase().includes(query.toLowerCase()))
                {return true}
            }
        })
        return filtered
    }

    random(){
        return (model[Math.floor(Math.random()*model.length)])
    }

}

export const crudProcesses = new CrudProcesses(validateObject)