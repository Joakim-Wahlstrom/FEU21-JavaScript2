import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const getCollection = (_collection) => {

  const documents = ref([])
  const error = ref(null)

  const colRef = collection(db, _collection)
  const q = query(colRef, orderBy('createdAt'))

  const unsub = onSnapshot(q, snapshot => {
    let results = []
    snapshot.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })

    documents.value = results
    // console.log(documents.value)
    error.value = null

  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not get the data'
  })


  watchEffect((onCleanup) => {
    onCleanup(() => unsub())
  })

  return { error, documents }
}

export default getCollection