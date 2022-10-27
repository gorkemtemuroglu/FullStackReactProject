import axios from "axios";

export default function getBank(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/bank/person/"+id)
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

export function addBank(callback,bank ){
    axios.post('http://localhost:8060/bank',bank)
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

export function updateBank(callback,bank ){
    axios.put('http://localhost:8060/bank',bank)
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

export function deleteBank(id){
    axios.delete('http://localhost:8060/bank/' + id);
}