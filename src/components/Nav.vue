<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-between pb-8">
    <!-- Note: Nav text must match route name -->
    <router-link v-for="item in nav" :to="item.route" :key="item.title" class="text-lg flex flex-row">
      {{ selectedRoute(item.title) }}
    </router-link>
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
  },
  methods: {
    selectedRoute(name) {
      return name === this.$route.name ? `→ ${name.toUpperCase()}` : name.toUpperCase()
    }
  }
}
</script>
