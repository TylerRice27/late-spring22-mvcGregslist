import { ProxyState } from "../AppState.js";
import { getCarForm } from "../Components/CarForm.js";


function _drawHouses() {
  // get all the houses and build a template

  let houses = ProxyState.houses
  let template = ""

  houses.forEach(h => {
    template += h.Template
  })


  document.getElementById('listings').innerHTML = template
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
    let form = getCarForm()
    document.getElementById("form-body").innerHTML = form

    _drawHouses()
  }



  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);

  }




}