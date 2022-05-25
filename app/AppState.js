import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  /** @type {import('./Models/House').House[]} */
  /** @type {import('./Models/Job').Job[]} */
  cars = [
    new Car({ make: 'Chevrolet', model: 'Impala', description: 'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg' }),
    new Car({ make: 'Buick', model: 'Grand National', description: 'It is grand', price: 15, year: 1984, color: '#ff0000', imgUrl: 'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg' })
  ]
  houses = [
    new House({ address: 'Jefferson Street', description: 'this home  is nice', rooms: 5, price: 500, year: 1809, imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000' }),
    new House({ address: 'Tyler Street', description: 'This house is aight', rooms: 2, price: 200, year: 1994, imgUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580' })
  ]

  jobs = [
    new Job({ title: 'Software Developer', description: 'You will do dope things!', salary: 75000, imgUrl: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
