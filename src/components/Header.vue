<template>
  <header
    class="bg-black text-white font-bold p-4 flex justify-center md:justify-end gap-6 px-6 md:px-12 lg:px-20 relative"
  >
    <!-- class="bg-gradient-to-r from-white to-[#A4DDED] text-black font-bold p-4 flex justify-center md:justify-end gap-6 px-6 md:px-12 lg:px-20 relative" -->
    <div
      class="relative md:absolute md:left-10 md:top-0 p-3 z-50 rounded bg-black shadow-lg hover:transition-transform"
    >
      <!-- style="box-shadow: 4px 4px 16px palevioletred" -->
      <router-link to="/" class="hover:underline">
        <img src="@/assets/logo3.jpeg" alt="Logo" class="h-48 lg:h-24 w-auto" />
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
