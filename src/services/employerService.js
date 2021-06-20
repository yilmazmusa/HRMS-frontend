import axios from "axios";

export default class EmployerService{
    
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

    Add(employer){
        return axios.post("http://localhost:8080/api/employers/Add",employer)
    }

    Update(employer){
        return axios.update("http://localhost:8080/api/employers/Update")
    }

    Delete(employerId){
        return axios.delete("http://localhost:8080/api/employers/Delete?employerId="+employerId)
    }
}