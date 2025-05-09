<template>
  <section id="hero" class="bg-columbia-blue">
    <div class="relative min-h-[40rem] lg:min-h-0 bg-black flex lg:flex-row flex-col">
      <div class="flex lg:flex lg:flex-row flex-col justify-center md:justify-normal h-full flex-1">
        <div class="relative flex-1 z-20 flex items-center justify-center">
          <div class="flex items-center justify-center h-full">
            <div class="w-full max-w-2xl px-6 py-12 lg:p-12 xl:p-16 text-center lg:text-left">
              <h1
                class="text-4xl xl:text-5xl font-bold text-gray-100 lg:text-gray-900 dark:text-gray-100 mb-6 !leading-tight"
              >
                <span class="block">IdeaColor</span>
                <span class="block text-blue-500"
                  >Todo lo que necesitás imprimir, en un solo lugar</span
                >
              </h1>

              <p
                class="text-gray-100/90 lg:text-gray-700 dark:text-gray-200 text-xl leading-normal mb-8 max-w-xl lg:max-w-none"
              >
                Tarjetas, sellos, adhesivos, textiles y mucho más. Rápido, profesional y a medida.
              </p>

              <div class="flex items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  class="text-2xl px-4 py-2 bg-blue-500 text-columbia-blue rounded-md hover:bg-blue-600"
                >
                  Pide tu presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute lg:relative inset-0 lg:inset-auto flex-1">
          <div class="absolute lg:hidden inset-0 bg-gray-900/60 dark:bg-gray-900/80 z-10" />
          <img
            src="@/assets/colors.jpg"
            alt="hero-1"
            class="h-full w-full object-cover xl:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
