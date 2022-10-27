import axios from "axios";

export default function getHobi(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/hobi/person/"+id)
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

export function addHobi(callback,hobi ){
    axios.post('http://localhost:8060/hobi',hobi)
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

export function updateHobi(callback,hobi ){
    axios.put('http://localhost:8060/hobi',hobi)
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

export function deleteHobi(id){
    axios.delete('http://localhost:8060/hobi/' + id);
}
