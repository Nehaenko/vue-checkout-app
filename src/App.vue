<template>
  <Header/>
  <Main/>
  <Footer label="Footer"/>
</template>
<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Main from './components/Steps/Steps.vue'

export default {
  name:'App',
  components: {
    Header,
    Footer,
    Main
  }
}
</script>
<style lang="scss">
@import "./styles/_core.scss";
</style>
