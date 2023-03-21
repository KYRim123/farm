import {INIT_STATE} from './constant'
import {combineReducers} from 'redux'
import {getTypeActions, getProducts} from './action'

export  function productReducers(state = INIT_STATE.products, action) {
    switch(action.type) 
        {
            case getTypeActions(getProducts.getProductsRequest): {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case getTypeActions(getProducts.getProductsSuccess): {
                return {
                    listProducts: action.payload,
                    isLoading: false
                }
            }
            case getTypeActions(getProducts.getProductsFailure): {
                return {
                    ...state,
                    isLoading: true
                }
            }
            default: return state
        }
}

export const reducer = combineReducers({
    productReducers
})

