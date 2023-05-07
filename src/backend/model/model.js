/*
  why add a unique id?
  I made modifications to the database by adding a unique id to each object this allows dogs to be identified individually
  on the case that I had two dogs with the same name, for example two "Spots" would cause a bug. 
  I wanted to use the Array.prototype.find function and this returns the first item found so 
  using a item which could be duplicates would cause problems.
  find() runs in an O(n) time complexity

  another way to solve this issue would be to do a comparison of all properties in the object
*/

export default [
    {
      name: "Saul",
      breed: "Lab",
      owner: "Dave",
      size: "LG",
      description: "An energetic lab that loves to play",
      id: "doggo1"
    }, 
    {
      name: "Goldie",
      breed: "Lab",
      owner: "Dave",
      size: "LG",
      description: "Office mommy dog",
      id: "doggo2"
    }, 
    {
      name: "Gio",
      breed: "Terrier",
      owner: "Dan",
      size: "SM",
      description: "A fluffy terrier mix who runs on treats",
      id: "doggo3"
    }, 
    {
      name: "Sophie",
      breed: "Pit Bull",
      owner: "Christina",
      size: "MD",
      description: "A brindled pitbull princess",
      id: "doggo4"
    }, 
    {
      name: "Taro",
      breed: "Great Pyrenees",
      owner: "Sara",
      size: "XL",
      description: "A great pyrenees mix often confused with a horse",
      id: "doggo5"
    }, 
    {
      name: "Gabby",
      breed: "Pit Bull",
      owner: "Dan",
      size: "MD",
      description: "A tutu-flaunting American bulldog/pitbull mix",
      id: "doggo6"
    }, 
    {
      name: "Percy",
      breed: "Husky",
      owner: "Monica",
      size: "LG",
      description: "A wolf-sized pup with piercing blue eyes",
      id: "doggo7"
    },
    {
      name: "Benny",
      breed: "Hound",
      owner: "Brandon",
      size: "MD",
      description: "A belly-rub loving hound-mix",
      id: 'doggo8'
    },
    {
      name: "Baxter",
      breed: "Chihuahua",
      owner: "Skip",
      size: "XS",
      description: "The eldest, wisest, and tiniest dog of the office",
      id: 'doggo9'
    },
    {
      name: "Vyla",
      breed: "Poodle",
      owner: "Skip",
      size: "SM",
      description: "The resident toy and bone hoarder",
      id: "doggo10"
    },
  ];