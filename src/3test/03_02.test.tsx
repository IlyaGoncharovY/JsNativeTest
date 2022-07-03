import {CityType} from "../2test/02__02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStuff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test("Budget should be for HOSPITAL", () => {

    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)

})

test("Budget should be for FIRESTATION", () => {

    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)

})

test("House should be repared", () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test("staff should be repared", () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)

})

test("House should", () => {
    toHireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})