<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Type a message and hit enter to send msg"
      @keypress.enter.prevent="handleSubmit"
    />

    <div class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from "vue";

import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection"
import { timestamp } from "../firebase/config";

export default {
  setup() {
    let { user } = getUser();

    const {addDoc, error} = useCollection('message')

    let message = ref();

    const handleSubmit = async () => {
      let chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chat)

      if(!error.value){
           message.value = "";
      }
     
    };

    return { message, handleSubmit, error, addDoc };
  },
};
</script>

<style scoped>
    form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>