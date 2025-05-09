<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from 'emailjs-com'

// Reactive form data
const form = reactive({
  name: '',
  email: '',
  message: '',
  phone: '',
})

// Reactive validation errors
const errors = reactive({
  name: '',
  email: '',
  message: '',
  phone: '',
})

const sendEmail = async () => {
  const templateParams = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    message: form.message,
  }

  try {
    await emailjs.send('service_8gldf8g', 'template_6qri5z9', templateParams, 's6VlQ2ekX07oB2SKW')
    alert('¡Mensaje enviado con éxito!')
  } catch (error) {
    console.error('Error al enviar el mensaje:', error)
    alert('Ocurrió un error al enviar el mensaje.')
  }
}

// Handle form submission
const handleSubmit = () => {
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.message = ''
  errors.phone = ''

  // Validate fields
  if (!form.name) {
    errors.name = 'Por favor, ingresa tu nombre.'
  }
  if (!form.email) {
    errors.email = 'Por favor, ingresa tu correo electrónico.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Por favor, ingresa un correo electrónico válido.'
  }
  if (!form.message) {
    errors.message = 'Por favor, escribe un mensaje.'
  }
  if (!form.phone) {
    errors.phone = 'Por favor, ingresa tu número de teléfono.'
  }

  // If there are errors, stop submission
  if (errors.name || errors.email || errors.message || errors.phone) {
    return
  }

  // Submit the form (e.g., send data to an API)
  sendEmail()

  // Reset the form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>

<template>
  <section
    id="contact"
    class="bg-gradient-to-r from-white to-[#A4DDED] flex flex-col items-center justify-center"
  >
    <div class="contact-form w-4/5 lg:w-1/3 my-32 mx-auto p-6 bg-gray-300 rounded-lg shadow-xl/30">
      <h1 class="text-3xl font-bold mb-4 text-black">Escríbenos!</h1>
      <form @submit.prevent="handleSubmit" novalidate class="space-y-4">
        <div>
          <label for="name" class="block font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="mt-1 block bg-white text-gray-900 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
        <div>
          <label for="email" class="block font-medium text-gray-700">Correo</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="mt-1 block bg-white text-gray-900 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
        <div>
          <label for="phone" class="block font-medium text-gray-700">Teléfono</label>
          <input
            type="text"
            id="phone"
            v-model="form.phone"
            class="mt-1 block bg-white text-gray-900 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
        </div>
        <div>
          <label for="message" class="block font-medium text-gray-700">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            class="mt-1 block bg-white text-gray-900 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
</template>
