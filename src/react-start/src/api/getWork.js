import axios from "axios";

export default function getWork(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/work/person/"+id)
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

export function addWork(callback,work ){
    axios.post('http://localhost:8060/work',work)
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

export function updateWork(callback,work ){
    axios.put('http://localhost:8060/work',work)
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

export function deleteWork(id){
    axios.delete('http://localhost:8060/work/' + id);
}