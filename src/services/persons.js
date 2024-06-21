import axios from "axios";

const baseUrl = '/api/persons'

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

export default { baseUrl, post, remove }
