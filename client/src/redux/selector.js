import {createSelector} from '@reduxjs/toolkit'
const listProducts = state => state.productReducers.listProducts
export const currentPageProducts = state => state.productReducers.currentPage

export const productsSelector = createSelector(
    listProducts, 
    (products) => {
        return products
})