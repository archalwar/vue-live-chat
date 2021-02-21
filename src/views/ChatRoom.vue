<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";

import {  useRouter } from "vue-router";

import getUser from "../composables/getUser";
import { watch } from "vue";

export default {
  components: { Navbar, NewChatForm, ChatWindow},
  setup() {
    let { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user) {
        router.push({ name: "Welcome" });
      }
    });    
  },
};
</script>

<style>
</style>