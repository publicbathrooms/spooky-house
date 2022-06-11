import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import Slider from '../compnents/Slider'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        <Slider />
        <p className='exploreCategoryHeading'>Browse By Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <p className='exploreCategoryName'>Places for Rent</p>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
          </Link>

          <Link to='/category/sale'>
            <p className='exploreCategoryName'>Places for Sale</p>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
          </Link>
        </div>
      </main>
    </div>
  )
}
export default Explore
