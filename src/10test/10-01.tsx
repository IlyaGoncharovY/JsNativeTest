import exp from "constants";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}
export type WithCompaniesType = UserType & {
    companies: { id: number, title: string }[]
}

export function makeHairStyle(u: UserType, power: number) {
    const copyU = {
        ...u,
        hair: u.hair / power
    }

    // copyU.hair = u.hair / power
    return copyU
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    // copy.address = {...copy.address, city: city}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    // copy.address = {...copy.address, city: city}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
    // copy.address = {...copy.address, city: city}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
    // copy.address = {...copy.address, city: city}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {

    return {
        ...u,
        books: u.books.map(el => el === oldBook ? newBook : el
            /*    if (el === oldBook) {
                    return newBook
                } else {
                    return el
                }*/
        )
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
                           bookForDelete: string) => ({
    ...u,
    books: u.books.filter(el => el !== bookForDelete)
    // copy.address = {...copy.address, city: city}
})

export const updateCompanyTitle = (user: WithCompaniesType,
                                   companyId: number,
                                   newTitle: string) => {
    const copy: WithCompaniesType = {
        ...user,
        companies: user.companies.map(el => el.id === companyId ? {...el, title: newTitle} : el)
    }
    return copy
}
