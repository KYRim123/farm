import {createActions} from 'redux-actions'
//fnc get type of actions
export const getTypeActions = (reduxActions) => {
    return reduxActions().type
}
// home
export const getQtyCart = createActions({
    getQtyCartRequest: undefined,
    getQtyCartSuccess: (payload => payload),
    getQtyCartFailure: (err => err),
})
//action for page products
export const getProducts = createActions({
    getProductsRequest: (payload => payload),
    getProductsSuccess: (payload => payload),
    getProductsFailure: (err => err),
})

export const getClassify = createActions({
    getClassifyRequest: (payload => payload),
    getClassifySuccess: (payload => payload),
    getClassifyFailure: (err => err),
})

export const changeClassify = createActions({
    changeClassifyRequest: (payload => payload),
    changeClassifySuccess: (payload => payload),
    changeClassifyFailure: (err => err),
})

export const fetchCart = createActions({
   fetchCartRequest: undefined,
   fetchCartSuccess: (payload => payload),
   fetchCartFailure: (err => err),
})

export const addProductCart = createActions({
    addProductCartRequest: (payload => payload),
    addProductCartSuccess: (payload => payload),
    addProductCartFailure: (err => err),
})

export const updateProductCart = createActions({
    updateProductCartRequest: (payload => payload),
    updateProductCartSuccess: (payload => payload),
    updateProductCartFailure: (err => err),
})

export const deleteProductCart = createActions({
    deleteProductCartRequest: (payload => payload),
    deleteProductCartSuccess: (payload => payload),
    deleteProductCartFailure: (err => err),
})




