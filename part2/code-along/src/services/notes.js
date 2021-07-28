import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
    return axios.get(baseUrl).then((response) => response.data);
};

const create = (newObject) => {
    return axios.post(baseUrl, newObject).then((response) => response.data);
};

const update = (id, newObject) => {
    return axios
        .put(`${baseUrl}/${id}`, newObject)
        .then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update };
