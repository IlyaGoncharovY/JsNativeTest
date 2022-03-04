//11 минута

const ages = [
    18, 20, 22, 1, 100, 90, 14
]

function predicate(age: number) {
    return age > 90;
}

const oldAges = [
    100
]

type CoursesType = {
    title: string
    prise: number
}

const courses = [
    {title: "CSS", prise: 110},
    {title: "JS", prise: 200},
    {title: "React", prise: 150}
]

const chipPredicatCourses = (courses: CoursesType) => {
    return courses.prise < 160
}

const chipCourses = [
    {title: "CSS", prise: 110},
    {title: "React", prise: 150}
]