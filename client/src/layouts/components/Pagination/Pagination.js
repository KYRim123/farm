import { useState } from 'react'
import './paginationStyle.scss'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/action'

function Pagination({currentPage}) {
  const pageNumber = [1, 2, 3, 4, 5]
  const [activeBtn, setActiveBtn] = useState(currentPage)
  const dispatch = useDispatch()

  const handleCurrentPage = (pageNumber) => {
    setActiveBtn(pageNumber)
    dispatch(getProducts.getProductsRequest(pageNumber))
  }

  return (
    <div className='pagination-wrapper'>
      {
        pageNumber.map((page, index) =>
          <div
            className={`pageBtn ${activeBtn === page ? 'active':''}`}
            key={index}
            onClick={() => handleCurrentPage(page)}
          >{page}</div>
        )
      }
    </div>
  )
}

export default Pagination
