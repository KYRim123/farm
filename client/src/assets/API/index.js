import axios from 'axios'

const URI = "http://localhost:4000"

export const fetchProduct = axios.get(`${URI}/products`)

