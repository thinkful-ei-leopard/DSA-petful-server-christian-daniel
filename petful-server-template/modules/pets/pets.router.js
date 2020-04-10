const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  return res
    .status(200)
    .json(Pets.getAllPets())
})

router.delete('/cats', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue('cat')
  return res 
    .status(204)
    .send('deleted')
})

router.delete('/dogs', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue(dogs)
  return res 
    .status(204)
    .send('deleted')
})

router.get('/next', json, (req, res) => {
  return res
    .status(200)
    .json(Pets.getNext())
})

module.exports = router
