import axios from "axios";

// const baseURL = "http://localhost:3001/persons/";
const baseURL = "/api/persons/";

const loadPhoneBook = () => {
    return axios.get(baseURL);
};

const addToPhoneBook = (person) => {
    return axios.post(baseURL, person);
};

const deleteFromPhoneBook = (id) => {
    return axios.delete(`${baseURL}${id}`);
};

const editPhoneBook = (person) => {
    return axios.put(`${baseURL}${person.id}`, person);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    loadPhoneBook,
    addToPhoneBook,
    deleteFromPhoneBook,
    editPhoneBook,
};
