<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "../components/layouts/AppHeader.vue";
import AppFooter from "../components/layouts/AppFooter.vue";
export default {
  components: { AppHeader, AppFooter },
};
</script>
