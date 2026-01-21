<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-row h-[95%]">
    <div class="flex flex-col flex-grow relative justify-center overflow-hidden">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col mx-8">
          <div
            class="flex align-center justify-center text-center text-4xl md:text-5xl lg:text-6xl"
          >
            404
          </div>
          <div
            class="flex align-center justify-center text-center text-2xl md:text-3xl lg:text-4xl"
          >
            The requested page was not found
          </div>
          <div class="flex align-center justify-center mt-4">
            <router-link
              to="/"
              class="border bg-transparent text-white hover:bg-white hover:text-black text-center text-lg md:text-xl lg:text-2xl p-2"
            >
              GO HOME
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>
