type LocalCityType = {
    title:string
    countryTitle:string
}

type AddressType = {
    streetTitle:string
    city:LocalCityType
}

type TechnologiesType = {
    id:number
    title:string
}

export type StudentsType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address:AddressType
    technologies:Array<TechnologiesType>
}

export const students: StudentsType = {
    id: 1,
    name: "ilya",
    age: 28,
    isActive: false,
    address:  {
        streetTitle: "Street 10",
        city:  {
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

