<template>
  <div class="welcome container">
    <h1>Welcome</h1>   
    <div v-if="showLogin">
        <LoginForm @login="enterChat" />
        <p>No account yet? <span @click="showLogin = false">Signup</span> insted</p>
    </div>

    <div v-else>
        <Signupform   @signUp="enterChat"  />
        <p>Already having account? <span @click="showLogin = true">Login</span> insted</p>
    </div>
    
    
  </div>
</template>

<script>
import Signupform from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { ref } from 'vue';
import {useRouter}  from 'vue-router'

export default {
    components: {Signupform, LoginForm},
    setup(){
        const showLogin = ref(true)
        const router = useRouter()

        const enterChat = () =>{
            router.push({name: 'ChatRoom'})
        }

        return{showLogin, enterChat}
    }
};
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
/* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }

  .welcome span{
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
  }
  .welcome button{
      margin: 20px auto;
  }
</style>