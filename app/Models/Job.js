import { generateId } from "../Utils/generateId.js"




export class Job {
    constructor(jobData) {
        this.id = generateId()
        this.title = jobData.title
        this.salary = jobData.salary
        this.description = jobData.description
        this.imgURL = jobData.imgURL
    }
}