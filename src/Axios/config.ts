import axios from "axios"

const RpgUrl = axios.create({
    baseURL: "http://localhost:8080"
})

export default RpgUrl