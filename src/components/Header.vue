<template>
  <header
    class="bg-gradient-to-r from-white to-[#A4DDED] text-black font-bold p-4 flex justify-center md:justify-end gap-6 px-6 md:px-12 lg:px-20 relative"
  >
    <div
      class="relative md:absolute md:left-10 md:top-0 p-3 z-50 rounded bg-gray-100 shadow-lg hover:transition-transform"
    >
      <router-link to="/" class="hover:underline">
        <img src="@/assets/logo.jpeg" alt="Logo" class="h-36 w-auto" />
      </router-link>
    </div>
    <!--  <div class="flex gap-6">
      <router-link to="/about" class="hover:underline text-2xl">Servicios</router-link>
      <router-link to="/contact" class="hover:underline text-2xl">Contacto</router-link>
    </div> -->
    <div class="hidden md:flex gap-6">
      <a href="#services" class="hover:underline text-2xl">Servicios</a>
      <a href="#contact" class="hover:underline text-2xl">Contacto</a>
    </div>
  </header>
</template>

<script lang="ts" setup></script>
