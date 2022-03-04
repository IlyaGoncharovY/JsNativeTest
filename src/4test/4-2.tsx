import {CityType, GovernmentBuildingsType} from "../2test/02__02";

export function demolishHousesOnStreet(city: CityType, street: string) {
city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterthen(buildings: Array<GovernmentBuildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}