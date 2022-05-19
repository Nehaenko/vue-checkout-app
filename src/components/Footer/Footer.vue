<template>
  <footer class="footer-container" :style="style">
    <TextField color="white" text="Mayborn (UK) Limited is a company registered in England & Wales (registered number: 1894022)
    whose registered office is at Mayborn House, Balliol Business Park, Benton Lane, Newcastle Upon Tyne, NE12 8EW.
    VAT number: GB 176148154. ©2022. All rights reserved."/>
  </footer>
</template>

<script>
import TextField from "../Core/TextField/TextField.vue";
import { reactive, computed } from 'vue';

export default {
  name: 'Footer',
  components: {
    TextField,
  },
  props: {
    backgroundColor: {
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./src/styles/global/variables";
@import "./styles.scss";
</style>
