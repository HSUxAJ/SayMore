<script>
export default {
  data() {
    return {
      logoUrl: 'https://firebasestorage.googleapis.com/v0/b/saymore-1c57e.appspot.com/o/Logo%2Flogo.png?alt=media&token=aa46624b-a9d7-4a63-adab-2eb35ecd7dd8',
      fullWidth: 0,
      fullHeight: 0,
      open: false
    }
  },
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
  	vm.fullHeight = window.innerHeight;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
      vm.fullHeight = window.innerHeight;
    };
  }, 
  methods: {
    toggle() {
      this.open = !this.open
    },
    isShow() {
      if (this.fullWidth < 800)
        return false
      this.open = false
      return true
    }
  }
}
</script>

<template src='./template.html'></template>
<style src='./style.css' scoped></style>
