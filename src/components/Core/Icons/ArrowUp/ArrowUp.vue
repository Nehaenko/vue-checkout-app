<template>
  <svg :style="style" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 14" width="27" height="14">
    <path d="m1.5 13l12-12 12 12" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'ArrowUp',
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