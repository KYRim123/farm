import { Link } from "react-router-dom"
import { backgr, adver } from '../../assets/images'
import { BiSkipNextCircle } from 'react-icons/bi'
import { AiTwotoneShopping } from 'react-icons/ai'
import './productsStyle.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/action'
import { productsSelector, currentPageProducts} from "../../redux/selector"
import Pagination from "../../layouts/components/Pagination/Pagination"


function Products() {
  const products = useSelector(productsSelector)
  const currentPage = useSelector(currentPageProducts)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts.getProductsRequest(currentPage))
  }, [dispatch, currentPage])  

  return (
    <div className='products'>
      <div className="title-products" style={{ backgroundImage: `url(${backgr})` }}>
        <h3 className='title'>chậu & thùng chứa</h3>
      </div>
      <div className="products-container wide">
        <div className="options flex">
          <div className="options-item">
            <label>sort by: </label>
            <select name="newest" className="sortby">
              <option value="">New Item</option>
              <option value="">aaa2</option>
              <option value="">aaa3</option>
              <option value="">aaa4</option>
            </select>
          </div>
          <div className="options-item">
            <label>show: </label>
            <select name="default" className="sortby">
              <option value="">Default</option>
              <option value="">Giá từ cao đến thấp</option>
              <option value="">Giá từ thấp đến cao</option>
             </select>
          </div>
        </div>

        <div className="products-wrapper flex" >
          {/* danh sách sản phẩm */}
          <div className="products-container" >
            <ul className="grid products-list">
              {
                products.map((product, index) =>
                  <li key={index} className="products__item">
                    <div style={{backgroundImage: `url(${product.image})`}} className="products__item--img"></div>
                    <div className="detail">
                      <h4>{product.name}</h4>
                      <p>mo ta san pham</p>
                      <div>
                        <span>$ {product.priceNew}</span>
                        <div className="icon">
                          <AiTwotoneShopping style={{verticalAlign: '-.3rem'}}/>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              }
            </ul>
            {/* phan trang */}
          <div className="pagination">
              <Pagination
              currentPage={currentPage} 
              />
          </div>
          </div>
          <div className="products-kategorien">
            <h4 className="title">Xếp loại</h4>
            <ul className="list-checkbox">
              <li>
                <input type="checkbox" />
                <label>chậu góc</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>chậu tròn</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>chậu vuông</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>chậu chữ nhật</label>
              </li>
            </ul>
            <div className="advertisement" style={{ backgroundImage: `url(${adver})` }}>
              <div className="content flex" >
                <h4>
                  Phát triển của riêng bạn
                  kế hoạch yêu thích
                </h4>
                <Link to="/cart" className="shopNow">
                  <label>shop now</label>
                  <BiSkipNextCircle className="icon" />
                </Link>
              </div>
            </div>

            <div className="filter-price">
              <h4 className="title">Filter By Price</h4>
              <input type="range" />
              <label>from $0 to $8000</label>
            </div>

            <div className="filter-size">
              <h4 className="title">Filter By Size</h4>
              <input type="range" />
              <label>from 2mm by 50</label>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products
