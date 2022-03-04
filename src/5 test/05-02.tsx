import {GovernmentBuildingsType, HouseType} from "../2test/02__02";

export const getStreetsTitleOfGovernmentBuildings =
    (buildings: Array<GovernmentBuildingsType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}