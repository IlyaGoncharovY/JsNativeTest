import axios from "axios";
import {log} from "util";

//const promise1 = axios.get("http://google.com")
//promise1.then((data)=>{
//    console.log(data)
//})
// axios.get("http://google.com")
//     .then((data)=>{
//         console.log(data)
//     })




// let RejectedPromise = Promise.reject({message: "error"})
// console.log(RejectedPromise)

// let ResolvedPromise = Promise.resolve([{}])
// ResolvedPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



export const userAPI = {
    getAllUsers() {
        return Promise.resolve([{name: "I"},{name: "E"}])
        // axios("http://")
    }
}
const pr = userAPI.getAllUsers()
pr.then(users => console.log(users))
