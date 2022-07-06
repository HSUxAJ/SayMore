<template>
  <JourneyContentComponent 
    :title="this.titleMsg"
    :subtitle="this.subtitleMsg"
    :contents="this.contentsMsg"
    :imgUrl="imgUrl"
  />
  <BookmarkComponent
    :contents="contentsMsg"  
  />
</template>
  
<script setup>
import JourneyContentComponent from '@/components/JourneyContentComponent/index.vue'
import BookmarkComponent from '@/components/BookmarkComponent/index.vue'
import { queryFirestore } from '@/firebase'
import { ref, onMounted} from 'vue'

const doc = ref()
const titleMsg = ref()
const subtitleMsg = ref()
const contentsMsg = ref()
const imgUrl = 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/popularJourney%2FYokohama-inner.jpg?alt=media&token=e40f8e0e-b4c5-4a4d-9cc3-54cbc6904cf0'

onMounted(async () => {
  doc.value = await queryFirestore(2)
  titleMsg.value = doc.value.title
  subtitleMsg.value = doc.value.subtitle
  contentsMsg.value = [
    {
      title : doc.value.part1_title,
      href: doc.value.part1_href,
      content: doc.value.part1_content
    },
    {
      title : doc.value.part2_title,
      href: doc.value.part2_href,
      content: doc.value.part2_content
    },
    {
      title : doc.value.part3_title,
      href: doc.value.part3_href,
      content: doc.value.part3_content
    },
  ]
})

</script>