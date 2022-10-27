import axios from "axios";

export default function getTel(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/tel/person/"+id)
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

export function addTel(callback,tel ){
    axios.post('http://localhost:8060/tell',tel)
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

export function updateTel(callback,tell ){
    axios.put('http://localhost:8060/tell',tell)
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

export function deleteTel(id){
    axios.delete('http://localhost:8060/tel/' + id);
}