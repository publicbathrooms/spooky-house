import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA7PekuIt6P78AGv-72XREeEldL59JiNR0',
  authDomain: 'house-app-364ca.firebaseapp.com',
  projectId: 'house-app-364ca',
  storageBucket: 'house-app-364ca.appspot.com',
  messagingSenderId: '741618132953',
  appId: '1:741618132953:web:f7e0ae4cc4092ae4859bc8',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
