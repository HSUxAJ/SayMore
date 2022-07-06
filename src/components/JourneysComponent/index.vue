<script>
export default {
  data() {
    return {
      title1: '觀 看 熱 門 行 程',
      subtitle1: '專 家 帶 你 遊 台 灣',
      title1Items: [
        {
          name: '台北101一日遊',
          url: 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/popularJourney%2FTaipei-101.jpg?alt=media&token=d78fee21-d597-47e5-8750-32d2e9da8c67',
          path: '/TaipeiDayTrip'
        },
        {
          name: '台北故宮一日遊',
          url: 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/popularJourney%2FTaipei-Palace-Museum.jpg?alt=media&token=d18eb578-7e92-422b-bb5c-47be1b97d474',
          path: '/PalaceMuseumDayTrip'
        }
      ],
      title2: '探 索 熱 賣 行 程',
      subtitle2: '絕 對 精 采 不 容 錯 過',
      title2Items: [
        {
          name: '橫濱一日遊',
          url: 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/popularJourney%2FYokohama.jpeg?alt=media&token=519f6346-0cac-4b05-8d94-b688c3b83edb',
          path: '/YokohamaDayTrip'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<template src='./template.html'></template>
<style src='./style.css' scoped></style>