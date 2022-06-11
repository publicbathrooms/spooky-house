import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Contact() {
  const [message, setMessage] = useState('')
  const [landlord, setLandlord] = useState(null)
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', params.landlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setLandlord(docSnap.data())
      } else {
        toast.error('Could not get that slumlord data')
      }
    }

    getLandlord()
  }, [params.landlordId])

  const onChange = (e) => setMessage(e.target.value)

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Contact Seller</p>
      </header>

      {landlord !== null && (
        <main>
          <div className='contactLandlord'>
            <p className='landlordName'>Send a message to: {landlord?.name}</p>
          </div>

          <form className='messageForm'>
            <div className='messageDiv'>
              <label htmlFor='message' className='messageLabel'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='textarea'
                value={message}
                onChange={onChange}
              ></textarea>
            </div>

            <p className='popupNotice'>
              enable pop-ups to complete this form else use:&nbsp;
              {landlord?.email}
            </p>
            <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
            >
              <button type='button' className='primaryButton'>
                Send Message
              </button>
            </a>
          </form>
        </main>
      )}
    </div>
  )
}

export default Contact
