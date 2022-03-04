import {createGreatingMessage, ManType} from "./05-01";


let people: Array<ManType> = [
    {name: "Andrey Andreev", age: 33},
    {name: "Alexander Alexanrov", age: 28},
    {name: "Dmitry Dmitriev", age: 18}
]

beforeEach(() => {
    people = [
        {name: "Andrey Andreev", age: 33},
        {name: "Alexander Alexanrov", age: 28},
        {name: "Dmitry Dmitriev", age: 18}
    ]
})

test("shold get array of greeting messages", () => {
    const messages = createGreatingMessage(people)

    expect(messages.length).toBe(3)

    expect(messages[0]).toBe(`Hello Andrey. Welcome to it`)
    expect(messages[1]).toBe(`Hello Alexander. Welcome to it`)
    expect(messages[2]).toBe(`Hello Dmitry. Welcome to it`)
})