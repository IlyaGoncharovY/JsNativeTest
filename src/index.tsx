import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {User} from "./6test/06-callback";
import axios from "axios";

// ReactDOM.render(
//   <React.StrictMode>
//     <User/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// const userAPI = {
//     getAllUsers() {
//         return Promise.resolve([{name: "I"},{name: "E"}])
//     },
//     login(login: string, password:string) {
//         if (login !== "123" && password !== "123"){
//             return Promise.reject({message:"error"})
//         } else {
//             return Promise.resolve({name: "ILYA", id: "01", avatarUrl: ""})
//         }
//     }
// }
// const pr = userAPI.getAllUsers()
// pr.then(users => console.log(users))
//
// userAPI.login("123", "44444")
//     .then((data) => {
//         // makeRedirect
//     })
//     .catch(error => {
//         // show error
//     })



// const promise2 = axios.get("http://google.com")
// const promise2_2 = promise2.then((user)=>{
//     console.log("hello" + " " + user)
// })
// console.log(promise2_2)


// axios.get(`https://www.google.ru/`)
//     .then(response=> response.status)
//     .then(status => console.log(status))





// const makeGoogleRequest = () => {
//     // const pr = axios.get("https://google.com")
//     // const pr2 = pr.then(res => res.data)
//     // return pr2
//     return axios.get(`https://www.google.ru/`)
//         .then(res => res.data)
//         .then(data => data.status)
// }
// makeGoogleRequest().then(data => console.log(data))
//01:45


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
