<template>
  <HomeBannerComponent />
  <JourneysComponent />
</template>


<script>
import HomeBannerComponent from '@/components/HomeBannerComponent/index.vue'
import JourneysComponent from '@/components/JourneysComponent/index.vue'

export default {
  name: 'Home',
  components: {
    HomeBannerComponent,
    JourneysComponent,
  },
}
</script>


