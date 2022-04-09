function increateAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    adress: {
        title: string
    }
}

test("reference type test", () => {
    let user: UserType = {
        name: "Ilya",
        age: 28,
        adress: {
            title: "Moskov"
        }
    }

    increateAge(user)

    expect(user.age).toBe(29)


    let superMan = user

    superMan.age = 1000
    expect(user.age).toBe(1000)
})

test("array reference test", () => {
    let users = [
        {
            name: "Ilya",
            age: 28
        },
        {
            name: "Ilya",
            age: 28
        },
    ]

    let admins = users

    admins.push({name: "barmaley", age: 11})

    expect(users[2]).toEqual({"age": 11, "name": "barmaley"})

})

test("value type test", () => {
    let usersCount = 100

    let adminCount = usersCount


    usersCount = usersCount + 1

    // expect(users[2]).toEqual({"age": 11, "name": "barmaley"})

})

test("reference type test2", () => {
    let user: UserType = {
        name: "Ilya",
        age: 28,
        adress: {
            title: "Moskov"
        }
    }

    // let addr = user.adress

    let user2: UserType = {
        name: "Nastya",
        age: 27,
        adress: user.adress
    }

    user2.adress.title = "Kanary"

    expect(user.adress.title).toBe("Kanary")
})


test("reference type array test", () => {

    const adress = {
        title: "Moskov"
    }

    let user: UserType = {
        name: "Ilya",
        age: 28,
        adress: adress
    }

    let user2: UserType = {
        name: "Nastya",
        age: 27,
        adress: adress
    }

    const users = [user, user2, {name: "Varvara", age: "1", adress: adress}]
    const admin = [user, user2]
    admin[0].name = "Ilya Urievich"
    // users[2].adress


    expect(users[0].name).toBe("Ilya Urievich")
    expect(user.name).toBe("Ilya Urievich")
})

test("sort test", () => {

    const letters = ["c", "d", "a", "z", "e"]
    letters.sort()

    expect(letters).toEqual(["a", "c", "d", "e", "z"])
})