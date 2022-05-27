import { ProxyState } from "../AppState.js";

import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HouseService.js";


function _drawHouses() {
  // get all the houses and build a template

  let houses = ProxyState.houses
  let template = ""

  houses.forEach(h => {
    template += h.Template
  })


  document.getElementById("listings").innerHTML = template
}


export class HousesController {
  constructor() {
    console.log('Houses controller loaded', ProxyState.houses);
    ProxyState.on('houses', _drawHouses)
    //this defaults back to my house page might be used
    //for not going back to cars when I submit a form
    this.viewHouses()
  }

  viewHouses() {
    //  Get Car Form and inject into modal body
    ///Tyler note I will have to come back and change this to house form
    // and pull it from my components folder but I think I have to make 
    //create house first
    let form = getHouseForm()
    document.getElementById("form-body").innerHTML = form

    _drawHouses()
  }



  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);

    let houseData = {
      address: form.address.value,
      rooms: form.rooms.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value


    }
    console.log("house data on form submit", houseData);

    housesService.createHouse(houseData)
    form.reset()


  }
  deleteHouse(id) {
    console.log('deleting house', id);
    housesService.deleteHouse(id)
  }



}