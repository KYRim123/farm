import axios from 'axios'

const URL = "http://localhost:4000"

export const fetchProducts = (payload) => {
    let newURL = `${URL}/products?page=${payload.currentPage}&sortBy=${payload.sortBy}`
    payload.classify.forEach(cly => {newURL += `&classify=${cly}`})
    return axios.get(newURL)
}