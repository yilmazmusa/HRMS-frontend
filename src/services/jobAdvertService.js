import axios from "axios"

export default class JobAdvertService{

    getall(){
        return axios.get("http://localhost:8080/api/jobadverts/getall")
    }

    getByIsActiveTrueOrderByDeadlineAsc(){
        return axios.get("http://localhost:8080/api/jobadverts/getByIsActiveTrueOrderByDeadlineAsc")
    }

    getByisActiveTrueAndEmployerId(id)
    {
        return axios.get("http://localhost:8080/api/jobadverts/getByisActiveTrueAndEmployerId?id="+id)
    }
    
    getJobAdvertDetails(){
        return axios.get("http://localhost:8080/api/jobadverts/getJobAdvertDetails")
    }

    findAllByIsActiveTrue(){
        return axios.get("http://localhost:8080/api/jobadverts/findAllByIsActiveTrue")
    }
    
    add(jobAdvert){
        return axios.post("http://localhost:8080/api/jobadverts/add",jobAdvert)
    }

    update(jobAdvert){
        return axios.put("http://localhost:8080/api/jobadverts/update",jobAdvert)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/jobadverts/delete?id=",id)
    }

}