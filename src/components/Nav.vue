<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-center sm:justify-end mb-4">
    <!-- Note: Nav text must match route name -->
    <div
      v-for="(item, index) in nav"
      :key="item.title"
      class="text-lg font-light flex flex-row gap-2"
    >
      <router-link
        :to="item.route"
        class="hover:bg-whiteish hover:text-blackish hover:no-underline"
      >
        <div v-if="item.title === $route.name" class="font-medium">
          {{ item.title.toUpperCase() }}
        </div>
        <div v-else>
          {{ item.title.toUpperCase() }}
        </div>
      </router-link>
      <div v-if="index !== nav.length - 1" class="pr-2">/</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      nav: [
        {
          route: '/',
          title: 'home'
        },
        {
          route: '/work',
          title: 'work'
        },
        {
          route: '/photos',
          title: 'photos'
        },
        {
          route: '/words',
          title: 'words'
        }
      ]
    }
  }
}
</script>
