import { useEffect, useState } from 'react'
import axios from 'axios'

import './index.css'
import personsService from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import NewPersonNotification from './components/NewPersonNotification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPersonName, setNewPersonName] = useState('')

  useEffect(() => {
    axios
      .get(personsService.baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    setNewName('')
    setNewNumber('')

    const isDuplicate = persons.some(person =>
      person.name.toLowerCase() === newName)

    if (isDuplicate) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }


    personsService
      .post(newPerson)
      .then(person => {
        setPersons(persons.concat(person))
        setNewPersonName(person.name)

        setTimeout(() => {
          setNewPersonName('')
        }, 5000)
      })
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handlePersonDelete = (person) => {
    const shouldDelete = window.confirm(`Delete ${person.name}?`);

    if (shouldDelete) {
      personsService
        .remove(person.id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.name !== deletedPerson.name))
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <NewPersonNotification name={newPersonName} />
      <h2>Add a new</h2>
      <PersonForm
        onAddPerson={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        onPersonDelete={handlePersonDelete}
      />
    </div>
  )
}

export default App