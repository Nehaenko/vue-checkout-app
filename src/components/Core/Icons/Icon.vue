<template>
  <img v-bind:src="icon" />
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    props = reactive(props);
  },
}
</script>