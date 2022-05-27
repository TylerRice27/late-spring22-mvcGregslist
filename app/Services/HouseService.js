import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";




class HousesService {
    createHouse(houseData) {

        console.log('I created a house', houseData);
        ProxyState.houses = [...ProxyState.houses, new House(houseData)]
        console.log(ProxyState.houses);

    }


    deleteHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
        ProxyState.houses = ProxyState.houses
    }
}



export const housesService = new HousesService()