import axios from 'axios'

const URL = "https://serverfarm.onrender.com"

export const getQtyCart = () => axios.get(URL)

export const fetchProducts = payload => {
    let newURL = `${URL}/products?page=${payload.currentPage}&sortBy=${payload.sortBy}`
    payload.classify.forEach(cly => {newURL += `&classify=${cly}`})
    return axios.get(newURL)
}

export const fetchProductsDetail = id => axios.get(`${URL}/products/detail?id=${id}`)

export const fetchProductCart = () => axios.get(`${URL}/cart`)

export const addProductCart = (payload) => axios.post(`${URL}/cart/add`, payload)

export const updateProductCart = (payload) => axios.patch(`${URL}/cart/update/${payload._id}`, payload)
export const deleteProductCart = (id) => axios.delete(`${URL}/cart/delete/${id}`)
 