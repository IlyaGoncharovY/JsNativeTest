export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrey Andreev", age: 33},
    {name: "Alexander Alexanrov", age: 28},
    {name: "Dmitry Dmitriev", age: 18}
]

const transformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrey",
        lastName: "Andreev"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Alexanrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Dmitriev"
    }
]


const dev2 = [
    transformator(people[0]),
    transformator(people[1]),
    transformator(people[2])
]

const dev3 = people.map(transformator)
const dev4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))
const messges = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to it`)
export const createGreatingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to it`)
}