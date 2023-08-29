<template>
  <v-layout>
    <v-toolbar class="px-10">
      <v-icon>mdi-dots-vertical</v-icon>
      <v-icon>mdi-user</v-icon>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Title</v-toolbar-title>
      <div>
        <NuxtLink class="text-decoration-none" :to="{ name: 'index' }"
          >Home</NuxtLink
        >
        |
        <NuxtLink class="text-decoration-none" :to="{ name: 'blog' }"
          >blog</NuxtLink
        >
      </div>
    </v-toolbar>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(35, 126, 50);
  font-weight: bold;
}
</style>
