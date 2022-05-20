<template>
  <Header/>
  <Steps/>
  <Footer/>
</template>
<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Steps from './components/Steps/Steps.vue'

export default {
  name:'App',
  components: {
    Header,
    Footer,
    Steps
  }
}
</script>
<style lang="scss">
@import "./styles/_core.scss";
</style>
