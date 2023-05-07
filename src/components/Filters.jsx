import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div className='filters-range-container'>
        <label htmlFor={minPriceFilterId}>Price:</label>
        <div className='filters-range'>
          <label htmlFor={minPriceFilterId}>from</label>
          <input
            type='range'
            className='filters-range-input'
            id={minPriceFilterId}
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Home decoration</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skincare</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}
