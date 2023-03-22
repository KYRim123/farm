import axios from 'axios'

const URI = "http://localhost:4000"

export const fetchProducts = (currentPage) => axios.get(`${URI}/products?page=${currentPage}`)

