<script>
  import { addDiary } from '@/firebase'
  export default {
    props: ['diaries'],
    data() {
      return {
        roleNum: 3,  //需和PostCard裡面的角色數一樣
        show: true,
        title: '',
        content: ''
      }
    },
    methods: {
      isShow() {
        this.show = !this.show
        console.log(this.show)
      },
      getRandomInt(max) {
        return Math.floor(Math.random() * max);
      },
      postMsg() {
        if (this.title == '' || this.content == '')
          return
        addDiary(this.title, this.content, this.getRandomInt(this.roleNum))
        this.title = ''
        this.content = ''
      }
    }
  }

</script>

<template src='./template.html'></template>
<style src='./style.css' scoped></style>