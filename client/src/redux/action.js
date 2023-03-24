import {createActions} from 'redux-actions'
//fnc get type of actions
export const getTypeActions = (reduxActions) => {
    return reduxActions().type
}
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
