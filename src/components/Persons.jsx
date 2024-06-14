const Person = ({
    person,
    onDelete
}) => {
    return (
        <li>
            {person.name}
            {' '}
            {person.number}
            {' '}
            <button onClick={(e) => onDelete(person)}>delete</button>
        </li>
    )
}

const Persons = ({
    persons,
    onPersonDelete
}) => {
    return (
        <ul>
            {persons.map(person => {
                return <Person
                    key={person.name}
                    person={person}
                    onDelete={onPersonDelete}
                />
            })}
        </ul>
    )
}

export default Persons