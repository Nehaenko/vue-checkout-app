<template>
  <header>
    <Icon icon="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"/>
    <TextField color="black" text="Secure Checkout"/>
  </header>
</template>

<script>
import Icon from "../Core/Icons/Icon.vue";
import TextField from "../Core/TextField/TextField.vue";
import {computed, reactive} from "vue";

export default {
  name: 'Header',
  components: {
    Icon,
    Logo,
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