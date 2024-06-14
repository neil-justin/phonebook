import { useEffect, useState } from 'react'
import axios from 'axios'

import personsService from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
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
        console.log(person)
        setPersons(persons.concat(person))
      })
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a new</h2>
      <PersonForm
        onAddPerson={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App