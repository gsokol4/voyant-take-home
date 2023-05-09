/*
  why add a unique id?
  I made modifications to the database by adding a unique id to each object this allows dogs to be identified individually
  on the case that I had two dogs with the same name, for example two "Spots" would cause a bug. 
  I wanted to use the Array.prototype.find function and this returns the first item found so 
  using a item which could be duplicates would cause problems.
  find() runs in an O(n) time complexity

  another way to solve this issue would be to do a comparison of all properties in the object
*/

const model = [
  {
    name: "Saul",
    breed: "Lab",
    owner: "Dave",
    size: "LG",
    description: "An energetic lab that loves to play",
    id: "doggo1",
    url: "https://www.upworthy.com/media-library/less-than-p-greater-than-a-sad-looking-labrador-retriever-less-than-p-greater-than.jpg?id=33297188",
  },
  {
    name: "Goldie",
    breed: "Lab",
    owner: "Dave",
    size: "LG",
    description: "Office mommy dog",
    id: "doggo2",
    url: "https://www.sugarthegoldenretriever.com/wp-content/uploads/2019/06/take-your-dog-to-work-day.jpg",
  },
  {
    name: "Gio",
    breed: "Terrier",
    owner: "Dan",
    size: "SM",
    description: "A fluffy terrier mix who runs on treats",
    id: "doggo3",
    url: "https://thesmartcanine.com/wp-content/uploads/2019/04/whoodle-terrier-mix-1024x742.jpg",
  },
  {
    name: "Sophie",
    breed: "Pit Bull",
    owner: "Christina",
    size: "MD",
    description: "A brindled pitbull princess",
    id: "doggo4",
    url: "https://www.allthingsdogs.com/wp-content/uploads/2019/02/Brindle-Pitbull-Feature.jpg",
  },
  {
    name: "Taro",
    breed: "Great Pyrenees",
    owner: "Sara",
    size: "XL",
    description: "A great pyrenees mix often confused with a horse",
    id: "doggo5",
    url: "https://www.aspca.org/sites/default/files/blog_horse-code-part-one_011922_main.jpg",
  },
  {
    name: "Gabby",
    breed: "Pit Bull",
    owner: "Dan",
    size: "MD",
    description: "A tutu-flaunting American bulldog/pitbull mix",
    id: "doggo6",
    url: "https://i.pinimg.com/originals/00/3d/e9/003de9062ec9a82b5b51d1c707264db1.jpg",
  },
  {
    name: "Percy",
    breed: "Husky",
    owner: "Monica",
    size: "LG",
    description: "A wolf-sized pup with piercing blue eyes",
    id: "doggo7",
    url: "https://a-z-animals.com/media/2022/05/Why-Do-Siberian-Huskies-Have-Blue-Eyes-header.jpg",
  },
  {
    name: "Benny",
    breed: "Hound",
    owner: "Brandon",
    size: "MD",
    description: "A belly-rub loving hound-mix",
    id: "doggo8",
    url: "https://media.tenor.com/6Zbxt9ZMN24AAAAM/hound-fox.gif",
  },
  {
    name: "Baxter",
    breed: "Chihuahua",
    owner: "Skip",
    size: "XS",
    description: "The eldest, wisest, and tiniest dog of the office",
    id: "doggo9",
    url: "https://www.loveyourdog.com/wp-content/uploads/2020/04/Chihuahua-Relaxing-Indoors-900x500.jpg.webp",
  },
  {
    name: "Vyla",
    breed: "Poodle",
    owner: "Skip",
    size: "SM",
    description: "The resident toy and bone hoarder",
    id: "doggo10",
    url: "https://patchpuppy.com/wp-content/uploads/2021/06/LionCut.jpg",
  },
];

export default model;
