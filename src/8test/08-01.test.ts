import {userObj} from "./08-01";

type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType


beforeEach(() => {
    users = {
        "101": {id: 101, name: "Ilya"},
        "1313": {id: 1313, name: "Nastya"},
        "1212": {id: 1212, name: "Varya"},
        "1111": {id: 1, name: "Aiki"}
    }
})

test("should update corresponding user from obj", () => {

    users["1313"].name = "Anastasia"
    expect(users[1313]).toEqual({id: 1313, name: "Anastasia"})


})

test("should delete corresponding user from obj", () => {
delete users["1"]
    users["1313"].name = "Anastasia"
    expect(users["1"]).toBeUndefined()
})