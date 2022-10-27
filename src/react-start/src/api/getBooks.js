import axios from "axios";

export default function getBooks(callback, id=1) {


    const baseURL = "http://localhost:8060";
    axios.get(baseURL+"/book/person/"+id)
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

export function addBook(callback,book ){
    axios.post('http://localhost:8060/book',book)
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

export function updateBook(callback,book ){
    axios.put('http://localhost:8060/book',book)
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

export function deleteBook(id){
    axios.delete('http://localhost:8060/book/' + id);
}