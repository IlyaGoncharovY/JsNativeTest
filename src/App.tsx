import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

    const names = [
        "Igor", "Oleg", "Bob", "Ted"
    ]

    const users = [
        {
            id: 222,
            name: "Igor"
        },
        {
            id: 3443,
            name: "Oleg"
        },
        {
            id: 5454,
            name: "Bob"
        },
        {
            id: 1245,
            name: "Ted"
        }
    ]

    const LiUsers = users.map((users) => <li key={users.id}>{users.name}</li>)


    return (
        <div className="App">
            <ul>
                {LiUsers}
            </ul>
        </div>
    );
}

export default App;
