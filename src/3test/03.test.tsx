import {StudentsType} from "../2test/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentsType;
beforeEach(() => {
        student = {
            id: 1,
            name: "ilya",
            age: 28,
            isActive: false,
            address: {
                streetTitle: "Street 10",
                city: {
                    title: "Moskov",
                    countryTitle: "Russia"
                }
            },
            technologies: [
                {
                    id: 1,
                    title: "HTML"
                },
                {
                    id: 2,
                    title: "css"
                },
                {
                    id: 3,
                    title: "HTML"
                }
            ]
        }
    }
)

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)

addSkill(student, "JS");

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive (student)

    expect(student.isActive).toBe(true)

})

test("Student live in city?" , () => {

    let result1 = doesStudentLiveIn(student, "Moskov")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(true)
    expect(result2).toBe(false)
})

