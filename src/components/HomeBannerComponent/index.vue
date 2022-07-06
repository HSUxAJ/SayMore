<script>
export default {
  data () {
    return {
      timer: 0,
      bannerIndex: 0,
      bannerImgs:[
        require('@/assets/banner/Taipei-Night.jpg'),
        require('@/assets/banner/Pong-Hu.jpg'),
        require('@/assets/banner/cat.jpg'),      
      ],
      cssImg: '../../assets/banner/cat.jpg',
    }
  },
  computed: {
    cssVal() {
      return {
        '--background-image': this.cssImg
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  methods:{
    startTimer: function(){
      this.timer = setInterval(this.autoPlay, 3000)
    },
    autoPlay() {
      if (this.bannerIndex == this.bannerImgs.length-1) {
        this.bannerIndex = 0
      }
      else {
        this.bannerIndex += 1
      }
      // this.bannerIndex = this.bannerImgs.length === (this.bannerIndex+1) ? 0 : (this.bannerIndex+1)
    }
  }
}
</script>

<template src='./template.html'></template>
<style src='./style.css' scoped></style>
