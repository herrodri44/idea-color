<template>
  <section id="services" class="">
    <div
      class="bg-gradient-to-r from-[#DB9422] via-[#d652C9] via-[#184DD7] to-[#00C14E] px-6 md:px-12 lg:px-20 py-24 text-center"
    >
      <div class="flex flex-col gap-6">
        <div class="flex flex-col items-center gap-4 mb-7">
          <div class="font-bold text-3xl leading-tight">
            <span class="text-gray-900 text-4xl italic">Nuestros Servicios</span>
          </div>
        </div>

        <div class="flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto">
          <div
            v-for="(serviceGroup, index) in servicios"
            :key="index"
            class="w-full lg:w-96 flex-1 p-8 mb-8 flex rounded-2xl flex-col bg-columbia-blue shadow-sm gap-6"
          >
            <ul class="list-none flex flex-col gap-4 flex-1">
              <li
                v-for="(service, idx) in serviceGroup"
                :key="idx"
                class="flex justify-start items-center gap-2 transform transition-transform duration-300 hover:translate-x-4 hover:scale-110"
              >
                <i class="pi pi-check-circle !text-lg text-[#404A53] font-bold" />
                <span class="text-gray-800 text-lg leading-tight">
                  {{ service.text }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const servicios = [
  [
    { text: 'Imprenta rápida' },
    { text: 'Impresión digital gran formato' },
    { text: 'Serigrafía y Tampografía' },
    { text: 'Diseño y Maquetación' },
    { text: 'Rotulación y vinilo de corte' },
  ],
  [
    { text: 'Plastificados y Laminados' },
    { text: 'Reclamo publicitario' },
    { text: 'Textil laboral y promocional' },
    { text: 'Tarjetas de visita' },
    { text: 'Sellos automáticos' },
  ],
  [
    { text: 'Llaveros, Chapas y Magnéticos' },
    { text: 'Expositores publicitarios' },
    { text: 'Cartón Pluma' },
    { text: 'Adhesivos troquelados' },
  ],
]
</script>
