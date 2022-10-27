import axios from "axios";

export default function getEducation(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/education/person/"+id)
        .then( (response) =>{
            console.log(response);
            callback(response.data);
        })
        .catch( (error) =>{
            if (error.response) {
                if (error.response.status === 404) {
                    callback(`\u2014`)
                }
            }
        })
}

export function addEducation(callback,school ){
    axios.post('http://localhost:8060/school',school)
        .then((response) =>{
            callback(response.data);
        })
        .catch( (error) =>{
            if (error.response) {
                if (error.response.status === 404) {
                    callback(`\u2014`)
                }
            }
        })
}

export function updateEducation(callback,school ){
    axios.put('http://localhost:8060/school',school)
        .then((response) =>{
            callback(response.data);
        })
        .catch( (error) =>{
            if (error.response) {
                if (error.response.status === 404) {
                    callback(`\u2014`)
                }
            }
        })
}

export function deleteEducation(id){
    axios.delete('http://localhost:8060/school/' + id);
}
