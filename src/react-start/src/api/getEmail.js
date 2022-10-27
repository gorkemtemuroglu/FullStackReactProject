import axios from "axios";

export default function getEmail(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/email/person/"+id)
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

export function addEmail(callback,email ){
    axios.post('http://localhost:8060/email',email)
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

export function updateEmail(callback,email ){
    axios.put('http://localhost:8060/email',email)
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

export function deleteEmail(id){
    axios.delete('http://localhost:8060/email/' + id);
}