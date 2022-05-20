<template>
  <svg :style="style" width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 25L13.5 13L1.5 1" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'ArrowRight',
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    fill: {
      type: String,
    },
    stroke: {
      type: String,
    }
  },
  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        width: props.width,
        height: props.height,
        fill: props.fill,
        stroke: props.stroke,
      })),
    }
  },
}
</script>