import axios from "axios";

const baseURL = "http://localhost:3001/persons/";

const loadPhoneBook = () => {
    return axios.get(baseURL);
};

const addToPhoneBook = (person) => {
    return axios.post(baseURL, person);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { loadPhoneBook, addToPhoneBook };
