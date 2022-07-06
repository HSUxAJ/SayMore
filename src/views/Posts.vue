<template>
  <SearchBarComponent/>
  <PostCardComponent 
    :diaries="this.document"
  />
  <WritePostComponent />
</template>
  
<script setup>
import SearchBarComponent from "@/components/SearchBarComponent/index.vue"
import PostCardComponent from "@/components/PostCardComponent/index.vue"
import WritePostComponent from "@/components/WritePostComponent/index.vue"
import { diaryRef } from '@/firebase'
import { ref, onMounted } from 'vue'

const document = ref()
onMounted (() => {
  diaryRef.on('value', (snapshot) => {
    const data = snapshot.val()
    document.value = Object.values(data)
    document.value.reverse()
    console.log(document.value)
  })
})
</script>
