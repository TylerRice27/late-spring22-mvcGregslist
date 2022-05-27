import { generateId } from "../Utils/generateId.js";





export class House {
    constructor(houseData) {
        this.id = generateId()
        this.address = houseData.address
        this.description = houseData.description
        this.rooms = houseData.rooms
        this.price = houseData.price
        this.year = houseData.year
        this.imgUrl = houseData.imgUrl
    }


    //Need to come back later and change deleteCar to deleteHouse
    get Template() {
        return /*html*/ `

<div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" >
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">${this.address} | ${this.rooms} | ${this.year}</h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.description}</p>
    
     <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
</div>
         `
    }
}