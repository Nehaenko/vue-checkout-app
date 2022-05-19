<template>
  <header>
    <Icon icon="@/icons/logo.svg"/>
  </header>
</template>

<script>
import Icon from "../Core/Icons/Icon.vue";
import Logo from "../../icons/logo.svg";

export default {
  name: 'Header',
  components: {
    Icon
  },
  data () {
    return {
      logo: Logo
    }
  }
}
</script>