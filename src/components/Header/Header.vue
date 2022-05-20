<template>
  <header class="header-container" :style="style">
    <div class="header-content">
      <Logo/>
      <div class="header-title">
        <Icon icon="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-vector-lock-icon-png-image_1638372.jpg"/>
        <TextField color="white" text="Secure Checkout"/>
      </div>
    </div>
  </header>
</template>

<script>
import Icon from "../Core/Icons/Icon.vue";
import TextField from "../Core/TextField/TextField.vue";
import Logo from "../Core/Logo/Logo.vue";
import {computed, reactive} from "vue";

export default {
  name: 'Header',
  components: {
    Logo,
    Icon,
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
