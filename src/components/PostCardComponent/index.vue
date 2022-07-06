<script>
  export default {
    props: ["diaries"],
    data() {
      return {
        characters: [
          { //circle
            url: 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/postCharater%2Fcircle.png?alt=media&token=2d4918d6-ff79-46dd-b912-66df118c957e',
            color: '#9DBFAF'
          },
          {//hat
            url: 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/postCharater%2Fhat.png?alt=media&token=f86b607b-4b67-49f8-9c5d-6a7ba3b7ef71',
            color: '#D3A4FF'
          },
          {//rice
            url: 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/postCharater%2Frice.png?alt=media&token=3e9e6969-ab9c-4e9c-a1f4-603d70db9256',
            color: '#FFD9EC'
          }
        ]
      }
    }
  }
</script>

<template src='./template.html'></template>
<style src='./style.css' scoped></style>