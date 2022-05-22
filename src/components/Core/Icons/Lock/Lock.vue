<template>
  <svg :style="style" width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4996 19.65V22.75V19.65ZM4.19961 28.95H22.7996C23.6218 28.95 24.4103 28.6234 24.9916 28.042C25.573 27.4607 25.8996 26.6722 25.8996 25.85V16.55C25.8996 15.7278 25.573 14.9393 24.9916 14.358C24.4103 13.7766 23.6218 13.45 22.7996 13.45H4.19961C3.37744 13.45 2.58894 13.7766 2.00758 14.358C1.42622 14.9393 1.09961 15.7278 1.09961 16.55V25.85C1.09961 26.6722 1.42622 27.4607 2.00758 28.042C2.58894 28.6234 3.37744 28.95 4.19961 28.95ZM19.6996 13.45V7.24999C19.6996 5.60565 19.0464 4.02865 17.8837 2.86593C16.7209 1.7032 15.144 1.04999 13.4996 1.04999C11.8553 1.04999 10.2783 1.7032 9.11555 2.86593C7.95282 4.02865 7.29961 5.60565 7.29961 7.24999V13.45H19.6996Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'Lock',
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