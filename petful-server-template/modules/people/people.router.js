const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  return res
    .status(200)
    .json(People.get())
})

router.delete('/', (req, res) => {
  People.dequeue()
  return res
    .status(204)
    .send('dequeued')
})

router.post('/', json, (req, res) => {
  const { name } = req.body
  let person = `${name}`
  // Add a new person to the queue.
  People.enqueue(person)
  return res
    .status(201)
    .json(person)
})

module.exports = router
