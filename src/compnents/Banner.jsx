import SocialLinks from './SocialLinks'
import { FaHome } from 'react-icons/fa'

function Banner() {
  return (
    <>
      <div className='bannerBg'>
        <div className='brandLogo bgDiv'>
          <p className='logoText'>
            Sp<span className='ooGlow'>oo</span>ky
          </p>
          <p className='logoText'>
            <FaHome className='lilHouse' />
            ouses
          </p>
        </div>
        <div className='bgDiv ghostDiv'>
          <div className='hideGhost'></div>
        </div>
        <div className='socialLinks bgDiv'>
          <p className='logoText'>
            <SocialLinks />
          </p>
        </div>
      </div>
      <div className='bannerSlogan'>
        <p className='bannerSloganText'>
          Buy, Sell, & Rent | Haunted Properties
        </p>
      </div>
    </>
  )
}
export default Banner
