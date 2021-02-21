import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)


const logout = async () => {
    error.value = null
    try {
        await projectAuth.signOut()
        error.value = null
    }
    catch (err) {
        error.value = err.message
    }

}

const useLogout = () => {
    return { logout, error }
}

export default useLogout