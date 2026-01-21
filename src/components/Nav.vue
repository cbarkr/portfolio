<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-center sm:justify-end mb-4">
    <div
      v-for="(item, index) in nav"
      :key="item.name"
      class="text-lg font-light flex flex-row gap-2"
    >
      <router-link
        :to="item.path"
        :class="item.name === $route.name ? 'underline' : null"
        class="hover:bg-whiteish hover:text-blackish hover:no-underline"
      >
        {{ item.name.toUpperCase() }}
      </router-link>
      <div v-if="index !== nav.length - 1" class="pr-2">|</div>
    </div>
  </div>
</template>

<script>
import { navRoutes } from '../router/routes'

export default {
  name: 'NavComponent',
  data() {
    return {
      nav: navRoutes
    }
  }
}
</script>
