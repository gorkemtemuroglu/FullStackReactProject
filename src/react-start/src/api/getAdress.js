import axios from "axios";

export default function getAdress(callback, id=1) {

    const client = axios.create({
        baseURL: "http://localhost:8060"
    });

    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/adress/person/"+id)
        .then( (response) =>{
            console.log(response);
            // return response.data();
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

export function addAdress(callback,adress ){
    axios.post('http://localhost:8060/adress',adress)
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


export function updateAdress(callback,adress ){
    axios.put('http://localhost:8060/adress',adress)
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

export function deleteAdress(id){
    axios.delete('http://localhost:8060/adress/' + id);
}