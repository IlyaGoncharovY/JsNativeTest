import {ManType} from "./distruction";

let props: ManType

beforeEach(() => {
    props = {
        name: "Ilya",
        age: 28,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Kuchino"
            }
        }
    }
})

test("distruction lesson", () => {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props
    const title = props.address.street.title

    expect(age).toBe(28)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Kuchino")

})

test("", () => {
   // const l1 = props.lessons[0]
   // const l2 = props.lessons[1]

    const[l1,l2] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
})