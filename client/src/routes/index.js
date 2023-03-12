import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Products from '../pages/products/Products'

const routes = [
    {path: '/', page: Home, layout: null},
    {path: '/cart', page: Cart, layout: null},
    {path: '/products', page: Products, layout: null},
]

export default routes