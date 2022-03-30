import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCX1c652ORC9T-0Ojn5-M0YVzj02L40YSc",
  authDomain: "vue3-firebase-chat-2cde6.firebaseapp.com",
  projectId: "vue3-firebase-chat-2cde6",
  storageBucket: "vue3-firebase-chat-2cde6.appspot.com",
  messagingSenderId: "839905193384",
  appId: "1:839905193384:web:ea773a450227f02c90c19d"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth }