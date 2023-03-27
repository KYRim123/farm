import {createSelector} from '@reduxjs/toolkit'
const listProducts = state => state.productReducers.listProducts
export const classifySelector = state => state.productReducers.classify
 
export const productsSelector = createSelector(
    listProducts, 
    (products) => {
        return products
})



