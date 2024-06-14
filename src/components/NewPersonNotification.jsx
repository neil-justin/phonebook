const NewPersonNotification = ({ name }) => {
    if (name) {
        return (
            <div className="newPersonNotification">{`Added ${name}`}</div>
        )
    }

    return null;
}

export default NewPersonNotification