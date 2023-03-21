import axios from 'axios'

const URI = "http://localhost:4000"

export const fetchProducts = () => axios.get(`${URI}/products`)

