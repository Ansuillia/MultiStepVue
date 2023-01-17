<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="flex h-16 items-center bg-slate-500 px-5">
    <div class="flex flex-1">Sua Logomarca</div>
    <div class="flex flex-1 justify-end">Área Login</div>
    <div class="ml-2 flex justify-end">Menu</div>
    <div class="hidden">
      <ul>
        <li>Alterar senha</li>
        <li>Sair</li>
      </ul>
    </div>
  </header>

  <RouterView class="container flex" />
</template>

<style scoped></style>
