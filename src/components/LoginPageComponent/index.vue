<script>
import { googleLogin, getUser } from "@/firebase"
export default {
  data() {
    return {
      googleLink: "https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/Google__G__Logo.svg?alt=media&token=239d2f24-fd5d-45eb-91be-363f4ff981ab",
      isLogin: false,
      userName: ""
    }
  },
  methods: {
    Login() {
      googleLogin()
      this.isLogin = !this.isLogin
      this.userName = getUser()
    }
  }
}
</script>

<template src='./template.html'></template>
<style src='./style.css' scoped></style>