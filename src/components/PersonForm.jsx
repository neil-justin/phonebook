const PersonForm = ({
    onAddPerson,
    name,
    onNameChange,
    num,
    onNumChange
}) => {
    return (
        <form onSubmit={onAddPerson}>
            <div>
                name: <input value={name} onChange={onNameChange} />
            </div>
            <div>
                number: <input value={num} onChange={onNumChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm