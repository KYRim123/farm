import {createSelector} from '@reduxjs/toolkit'
const listProducts = state => state.productReducers.listProducts
export const classifySelector = state => state.productReducers.classify
 
export const productsSelector = createSelector(
    listProducts, 
    classifySelector,
    (products, classify) => {
        return products.filter(product => classify.length > 0 ? classify.includes(product.typePot) : true)
})



