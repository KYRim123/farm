import {createActions} from 'redux-actions'

export const getTypeActions = (reduxActions) => {
    return reduxActions().type
}

export const getProducts = createActions({
    getProductsRequest: undefined,
    getProductsSuccess: (payload => payload),
    getProductsFailure: (err => err),
})