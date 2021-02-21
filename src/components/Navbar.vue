<template>
  <nav v-if="user != null">
      <div>
          <p>Hey there....{{user.displayName}} here</p>
          <p class="email">Currently logged in as... {{user.email}}</p>
      </div>
      <button @click="signOut">Logout</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';

import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser'

export default {
    setup(){
        const {logout, error} = useLogout()
        const router = useRouter()

        const {user} = getUser()

        

        const signOut = async() => {
           await  logout()

            if(!error.message){
                router.push({name: 'Welcome'})
            }
        }

        return {signOut, user}

    }
}
</script>

<style>

nav{
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 20px;
    border-bottom: 1px solid #eee;
}
nav p{
    margin:  2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email{
    font-size: 14px;
    color: #999;
}

</style>