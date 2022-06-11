import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'

import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({ listing, id, onDelete, onEdit }) {
  return (
    <li className='categoryListing'>
      <div className='editControls'>
        {onDelete && (
          <DeleteIcon
            className='removeIcon'
            fill='rgb (231,76,60)'
            onClick={() => onDelete(listing.id, listing.name)}
          />
        )}
        {onEdit && <EditIcon className='editIcon' onClick={() => onEdit(id)} />}
      </div>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
        <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{listing.location}</p>
          <p className='categoryListingName'>{listing.name}</p>

          <div className='categoryListingInfoDiv'>
            <img src={bedIcon} alt='bed' className='categoryInfoIcon' />
            <p className='categoryListingInfoText'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : '1 Bedroom'}
            </p>
            <img src={bathtubIcon} alt='tub' className='categoryInfoIcon' />
            <p className='categoryListingInfoText'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : '1 Bathroom'}
            </p>
          </div>
          <div>
            <p className='categoryListingPrice'>
              $
              {listing.offer
                ? listing.discountedPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : listing.regularPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              {listing.type === 'rent' && '/ Month'}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default ListingItem
