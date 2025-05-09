<template>
  <div class="min-h-screen text-white">
    <Header />
    <router-view />
  </div>
</template>

<style></style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>
