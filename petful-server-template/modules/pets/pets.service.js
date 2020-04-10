const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  getNext() {
    // Return the pets next in line to be adopted.
     let cat = pets.cats.show()
     let dog = pets.dogs.show()
     return [cat, dog];
},

  getAllPets() {
    let cats = store.cats
    let dogs = store.dogs
    let pets = {
      cats, 
      dogs
    }
    return pets
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      pets.cats.dequeue();
    }
    else if (type === 'dog') {
      pets.dogs.dequeue();
    }
  }
}
