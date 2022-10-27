import axios from "axios";

export default function getFriends(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/person/friends/"+id)
        .then( (response) =>{
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

export function addFriend(callback,person ){
    axios.post('http://localhost:8060/person',person)
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

export function updateFriend(callback,person ){
    axios.put('http://localhost:8060/person',person)
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

export function deleteFriend(id){
    axios.delete('http://localhost:8060/person/' + id);
}
