import axios from "axios";

export default function getPerson(callback, id=1) {


     const baseURL = "http://localhost:8060";
     axios.get(baseURL+"/person/"+id)
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

// export function getFriends(callback, id=1) {
//
//
//     const baseURL = "http://localhost:8080";
//     axios.get(baseURL+"/person/friends/"+id)
//         .then( (response) =>{
//             callback(response.data);
//         })
//         .catch( (error) =>{
//             if (error.response) {
//                 if (error.response.status === 404) {
//                     callback(`\u2014`)
//                 }
//             }
//         })
// }
