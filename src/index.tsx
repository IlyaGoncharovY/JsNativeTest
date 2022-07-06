import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

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

// const getNumber = () => {
//     // const promise = Promise.resolve(Math.random())
//     const promise = new Promise((res, rej) => {
//         // rej("error")
//         setTimeout(() => {
//             res(Math.random())
//         }, 2000)
//     })
//     return promise
// }

// let n1 = getNumber()
// let n2 = getNumber()
// console.log(n1)
// console.log(n2)

// getNumber().then(n => console.log(n))
// getNumber().then(n => console.log(n))
//-------------------------------------------------------------------------------
// const repo = {
//     save(data: any) {
//         try {
//             localStorage.setItem("some-key", JSON.stringify(data))
//         } catch (error) {
//             return false
//         }
//         return true
//     },
//     read () {
//
//           const data = localStorage.getItem("some-key")
//             if(!data) {
//                 return null
//             } else {
//                 return (JSON.parse(data))
//             }
//         },
//     saveAsync(data: any) {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 localStorage.setItem("some-key", JSON.stringify(data))
//                 resolve(() => {
//                 })
//             } catch (error) {
//                 reject(error)
//             }
//         })
//
//         return promise
//     },
//     readAsync () {
//         return new Promise((resolve, reject)=>{
//             const data = localStorage.getItem("some-key")
//             if(!data) {
//                 resolve(null)
//             } else {
//                 resolve (JSON.parse(data))
//             }
//         })
//     }
// }
//
// let result = repo.save({name: "Ilya"})
// if (result) {
//     console.log("saved")
// } else {
//     console.log("dont saved")
// }
//
// repo.saveAsync({name: "Ilya"})
//     .then(() => {
//         console.log("saved")
//     })
//     // .catch((error) => {
//     //     console.log("dont saved " + error)
//     // })
//
// const run = async () => {
//     await repo.saveAsync({name: "Ilya"})
//     console.log("saved")
//    const data = await repo.read()
// }


// function wait(ms:any) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve(ms)},ms)
//     })
// }
// async function run(){
//     await wait(1000)
//     console.log(1)
//     await wait(2000)
//     console.log(2)
//     await wait(3000)
//     console.log(3)
// }
// run()
// function randomIntFromInterval(min:number, max:number) {
//     return Math.floor(Math.random()*(max - min+1)+min)
// }
//
// var fakeAxios = {
//     _fake(url:string, data:any) {
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 let responseData = {
//                     text: `${url} loves you`,
//                     requestedCount: data.count,
//                     message: "",
//                     vacancies: 12
//                 }
//                 if(url.indexOf(`it-camasutra`)>0) {
//                     responseData = {
//                         text: `${url} loves you`,
//                         requestedCount: data.count,
//                         message: "we will preapare students for you",
//                         vacancies: 12
//                     }
//                 } else if (url.indexOf("google") > 0) {
//                     responseData = {
//                         text: `${url} loves you`,
//                         requestedCount: data.count,
//                         message: "we will work google",
//                         vacancies: 13
//                     }
//                 } else if (url.indexOf("microsoft") > 0) {
//                     responseData = {
//                         text: `${url} loves you`,
//                         requestedCount: data.count,
//                         message: "we will work microsoft",
//                         vacancies: 12
//                     }
//             }
//                 resolve({
//                     request: {},
//                     status: 200,
//                     headers: {},
//                     config:{},
//                     data: responseData
//                 })
//         }, randomIntFromInterval(1,5)*1000)
//     })
// },
//     post(url:string, data:any) {
//     return this._fake(url, data)},
//     get(url:string, data:any) {
//         return this._fake(url, data)
//     }
// }
//
//
// let findUserInDB = (id:number) => {
//     const users = [{id: 1, name:"Ilya", friend: 3}, {id: 2, name:"Nastya", friend: null}, {id: 3, name:"Varya", friend: 2}]
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let user = users.find(el=> el.id === id)
//             if (user === null) {
//                 reject("user not found")
//             } else {
//                 resolve(user)
//             }
//         }, randomIntFromInterval(500, 1500))
//     })
// }
//
// findUserInDB(1)
//     .then(user => {
//         console.log(user.name)
//         return user.friend
//     })
//     .then(friendId => findUserInDB(user.friend))
//---------------------------------







const api = {
    save() {

    },
    read() {
        return Promise.resolve({name: "hello loshara!"})
    }
}
async function run () {
    await api.save()
    console.log("saved")
    let data = await api.read()
    console.log(data)
}
run()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
