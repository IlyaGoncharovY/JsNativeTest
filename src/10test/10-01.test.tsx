import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10-01";


test("", () => {
    let user: UserType = {
        name: "Ilya",
        hair: 32,
        address: {
            city: "Moskov"
        }
    }
    const awesomeUser = makeHairStyle(user, 2)
    // hairDresser(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test("chande address", () => {
    let user: UserWithLaptopType = {
        name: "Ilya",
        hair: 32,
        address: {
            city: "Moskov",
            house: 12
        }, laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, "Samara")


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Samara")
})


test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Ilya",
        hair: 32,
        address: {
            city: "Moskov",
            house: 12
        }, laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react", "ts"]
    }

    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})


test("add new book to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Ilya",
        hair: 32,
        address: {
            city: "Moskov",
            house: 12
        }, laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, "ts")


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
})

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Ilya",
        hair: 32,
        address: {
            city: "Moskov",
            house: 12
        }, laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts")


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
})

test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Ilya",
        hair: 32,
        address: {
            city: "Moskov",
            house: 12
        }, laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, "js")


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})

test("remove correct name", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Ilya",
        hair: 32,
        address: {
            city: "Moskov",
            house: 12
        }, laptop: {
            title: "ZenBook"
        },
        companies: [{id:1, title:"Epam"},
            {id:2, title:"IT-INCUBATOR"}
        ]
    }
const userCopy = updateCompanyTitle(user, 1, "EPAM")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe("EPAM")
})

