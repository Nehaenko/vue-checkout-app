<template>
  <p :style="style">
    {{text}}
  </p>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'TextField',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    fontSize: {
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        fontSize: props.fontSize,
        color: props.color,
      })),
    }
  },
}
</script>