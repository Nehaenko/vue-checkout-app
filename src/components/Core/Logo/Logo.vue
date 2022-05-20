<template>
    <img :src="logo" alt="logo"/>
</template>
<script>
import logo from '../../../icons/logo.svg'
import {computed, reactive} from "vue";
export default {
  name: "Logo",
  data() {
    return {
      logo: logo
    }
  }
}
</script>