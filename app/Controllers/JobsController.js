import { ProxyState } from "../AppState.js";


function _drawJobs() {

}

export class JobsController {

    constructor() {

        console.log("Jobs controller is running", ProxyState.jobs);

    }





    viewJobs() {

        _drawJobs()
    }
}




