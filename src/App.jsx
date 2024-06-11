import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    setNewName('')
    setNewNum('')

    const isDuplicate = persons.some(person =>
      person.name.toLowerCase() === newName)

    if (isDuplicate) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      num: newNum
    }

    setPersons(persons.concat(newPerson))
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumChange = (e) => {
    setNewNum(e.target.value)
  }

  // refactor: extract form, extract list
  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a new</h2>
      <PersonForm
        onAddPerson={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        num={newNum}
        onNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App