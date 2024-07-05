import axios from "axios"
import {getCookie} from '../Cookies/Cookie'

const instance = axios.create({
    baseURL:"http://localhost:5555",
    timeout:10000,
    headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${getCookie('accessToken')}`
    }
})

export default instance