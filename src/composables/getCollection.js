import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'


const getCollection = (collection) => {

    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap) => {
        let result = []

        snap.docs.forEach(doc => {
            doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
        })

        documents.value = result

        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        //unsub from pref collection when watcher is stopped(componnet unmount)

        onInvalidate(() => unsub())
    })

    return { documents, error }

}

export default getCollection;