import ReactDOM from "react-dom";
import App from "./App.js";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// import axios from "axios";

// axios
//   .get("http://localhost:3001/notes")
//   .then((response) => {
//     const notes = response.data;
//     console.log(notes);
//     // console.log(response);
// });
// console.log(promise);

// const promise2 = axios.get("http://localhost:3001/foobar")
// .then(() => console.log("Success"), () => console.log("Failure"));

// const notes = [
//     {
//         id: 1,
//         content: "HTML is easy",
//         date: "2019-05-30T17:30:31.098Z",
//         important: true,
//     },
//     {
//         id: 2,
//         content: "Browser can execute only JavaScript",
//         date: "2019-05-30T18:39:34.091Z",
//         important: false,
//     },
//     {
//         id: 3,
//         content: "GET and POST are the most important methods of HTTP protocol",
//         date: "2019-05-30T19:20:14.298Z",
//         important: true,
//     },
// ];
