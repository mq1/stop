<template></template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    if (!this.$auth.loggedIn) this.$auth.loginWith("spotify");
  },
});
</script>