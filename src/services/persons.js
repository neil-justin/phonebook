import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const post = newPerson => {
    return axios
        .post(baseUrl, newPerson)
        .then(response => response.data);
}

const remove = personId => {

    return axios
        .delete(`http://localhost:3001/persons/${personId}`)
        .then(response => response.data);
}

export default { post, remove }
