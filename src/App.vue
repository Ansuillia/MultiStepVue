<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex h-16 items-center bg-slate-500 px-5">
    <RouterLink to="/" class="flex flex-1">Logo</RouterLink>
    <RouterLink to="/register" class="flex flex-1">Register</RouterLink>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
