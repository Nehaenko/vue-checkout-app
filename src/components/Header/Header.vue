<template>
  <header class="header-container" :style="style">
    <div class="header-content">
      <Logo/>
      <div class="header-title">
        <Lock stroke="white"/>
        <TextField color="white" text="Secure Checkout"/>
      </div>
    </div>
  </header>
</template>

<script>
import Lock from "../Core/Icons/Lock/Lock.vue";
import TextField from "../Core/TextField/TextField.vue";
import Logo from "../Core/Logo/Logo.vue";
import {computed, reactive} from "vue";

export default {
  name: 'Header',
  components: {
    Logo,
    Lock,
    TextField
  },
  props: {
    background: {
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        background: props.background,
      })),
    }
  },
}
</script>


<style lang="scss" scoped>
@import "./src/styles/global/variables";
@import "./styles.scss";
</style>
