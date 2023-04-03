import { RxMinus } from 'react-icons/rx'
import { RiAddFill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import './cartStyle.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../redux/action'
import { getCartSelector } from '../../redux/selector'

function Cart() {
  const dispatch = useDispatch()
  const data = useSelector(getCartSelector)


  const minus = (product) => {
    const newQty =  product.qty > 1 ?  product.qty - 1 : 1
    dispatch(action.updateProductCart.updateProductCartRequest({...product, qty: newQty}))
    }

  const addQty = (product) => {
    const newQty = product.qty + 1
    dispatch(action.updateProductCart.updateProductCartRequest({...product, qty: newQty}))
   }

  useEffect(() => {
    dispatch(action.fetchCart.fetchCartRequest())
  }, [dispatch])

 
  return (
    <div className="cart-wrapper wide">
      <h2 className="title">shopping cart</h2>
      <div className="cart-container">
        <table className="product-table">
          <tbody>
            <tr>
              <th></th>
              <th>product</th>
              <th>price</th>
              <th>qty</th>
              <th>total</th>
              <th></th>
            </tr>
            {
              data && data.map((product, index) =>
                <tr key={index}>
                  <td>
                    <img src={product.image} alt="" />
                  </td>
                  <td className='product--name--des'>
                    <h4>{product.name}</h4>
                    <span>{product.typePot}</span>
                  </td>
                  <td>
                    $ {product.price}
                  </td>
                  <td className='table-qty'>
                    <RxMinus className='icon' onClick={() => minus(product)}/>
                    <span>{product.qty}</span>
                    <RiAddFill className='icon' onClick={() => addQty(product)}/>
                  </td>
                  <td>
                    $ {product.total}
                  </td>
                  <td>
                    <AiOutlineClose className='cart--deleteItem' />
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart
