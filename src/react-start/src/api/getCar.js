import axios from "axios";

export default function getCar(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/car/person/"+id)
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

export function addCar(callback,car ){
    axios.post('http://localhost:8060/car',car)
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

export function updateCar(callback,car ){
    axios.put('http://localhost:8060/car',car)
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

export function deleteCar(id){
    axios.delete('http://localhost:8060/car/' + id);
}
