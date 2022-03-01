import {students, StudentsType} from "../2test/02";
import {GovernmentBuildingsType, HouseType} from "../2test/02__02";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (students: StudentsType, skill: string) => {
    students.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(students: StudentsType, skill: string) {
    students.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentsType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentsType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export function toHireStuff(governmentBuildings: GovernmentBuildingsType, stuffCountToHire: number) {
    governmentBuildings.staffCount += stuffCountToHire
}