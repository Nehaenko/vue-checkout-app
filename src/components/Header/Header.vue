<template>
  <header>
    <Logo />
    <Icon icon="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"/>
    <TextField color="black" text="Secure Checkout"/>
  </header>
</template>

<script>
import Icon from "../Core/Icons/Icon.vue";
import Logo from "../Core/Logo/Logo.vue";
import TextField from "../Core/TextField/TextField.vue";

export default {
  name: 'Header',
  components: {
    Icon,
    Logo,
    TextField
  }
}
</script>