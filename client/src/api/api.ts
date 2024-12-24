import axios, { AxiosError } from "axios";

export function api(file: File|undefined){
    let response = axios.post('http://localhost:3000',file).then((response) => {
        console.log(response)
    }).catch((error: AxiosError) => {
        console.log(error)
    })
    return response
}
