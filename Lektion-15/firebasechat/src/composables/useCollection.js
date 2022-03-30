import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore'


const useCollection = (_collection) => {

  const error = ref(null)

  const addMessage = async (doc) => {
    error.value = null

    try {
      
      const colRef = collection(db, _collection)
      const docRef = await addDoc(colRef, doc)

      await updateDoc(docRef, {
        createdAt: serverTimestamp()
      })

    } catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  return { error, addMessage }

}

export default useCollection