<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-between pb-8">
    <!-- Note: Nav text must match route name -->
    <router-link to="/" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ selectedRoute(nav.home) }}</router-link>
    <router-link to="/projects" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ selectedRoute(nav.projects) }}</router-link>
    <router-link to="/photos" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ selectedRoute(nav.photos) }}</router-link>
    <router-link to="/words" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ selectedRoute(nav.words) }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        nav: {
          home: 'home',
          projects: 'projects',
          photos: 'photos',
          words: 'words',
        },
      }
    },
    methods: {
      selectedRoute(name) {
        return name === this.$route.name ? `[${name}]` : name
      }
    }
  }
</script>
